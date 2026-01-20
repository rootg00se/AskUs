import { PrismaService } from "@/prisma/prisma.service";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { GetAllPostsDto } from "./dto/get-all-posts.dto";
import { CreatePostDto } from "./dto/create-post.dto";
import { S3StorageService } from "@/libs/s3-storage/s3-storage.service";
import { UpdatePostDto } from "./dto/update-post.dto";
import { ConfigService } from "@nestjs/config";
import { POSTS_INCLUDE, POSTS_OMIT } from "./utils/posts.constants";
import { IPost } from "../libs/common/types/post.type";

@Injectable()
export class PostsService {
    private readonly BUCKET_URL: string;

    constructor(
        private readonly prismaService: PrismaService,
        private readonly s3StorageService: S3StorageService,
        private readonly configService: ConfigService,
    ) {
        this.BUCKET_URL = this.configService.getOrThrow<string>("S3_BUCKET_URL");
    }

    async getAllPosts(getAllPostsDto: GetAllPostsDto, userId?: string) {
        const pageLimit = getAllPostsDto.pageLimit || 10;
        const postsToSkip = (getAllPostsDto.page || 0) * pageLimit;
        const difficulties = getAllPostsDto.difficulty?.split(",") || [];
        const tags = getAllPostsDto.tags?.split(",") || [];

        let queryPostsId;

        if (getAllPostsDto.query) {
            queryPostsId = await this.prismaService.$queryRaw<{ post_id: string }[]>`
                WITH search_words AS (
                    SELECT unnest(string_to_array(${getAllPostsDto.query}, ' ')) AS word
                ) SELECT DISTINCT p.post_id FROM posts p
                JOIN search_words w ON p.title ILIKE '%' || w.word || '%'
                OR p.title % w.word;
            `;
        }

        const posts = await this.prismaService.posts.findMany({
            skip: postsToSkip,
            take: pageLimit,
            where: {
                ...(queryPostsId && {
                    post_id: {
                        in: queryPostsId?.map(el => el.post_id),
                    },
                }),
                ...(difficulties.length > 0 && {
                    post_difficulties: {
                        difficulty: {
                            in: difficulties,
                        },
                    },
                }),
                AND: tags.map(tag => ({
                    posts_tags: {
                        some: {
                            tags: { tag },
                        },
                    },
                })),
            },
            orderBy: { created_at: "desc" },
            ...this.postsSelect(userId),
        });

        return posts.map(post => this.transformPostData(post));
    }

    async getPopularPosts(limit: number = 5, userId?: string) {
        const posts = await this.prismaService.posts.findMany({
            orderBy: {
                post_likes: {
                    _count: "desc",
                },
            },
            ...this.postsSelect(userId),
            take: limit,
        });

        return posts.map(post => this.transformPostData(post));
    }

    async getPostById(postId: string, userId?: string) {
        const posts = await this.prismaService.posts.findFirst({
            where: {
                post_id: postId,
            },
            ...this.postsSelect(userId),
        });

        if (!posts) throw new NotFoundException("Post with that id was not found");

        return this.transformPostData(posts);
    }

    async createPost(file: Express.Multer.File, userId: string, createPostDto: CreatePostDto) {
        const existingTags = await this.prismaService.tags.findMany({
            where: { tag: { in: createPostDto.tags } },
        });

        const existingDifficulties = await this.prismaService.post_difficulties.findFirst({
            where: { difficulty: createPostDto.difficulty },
        });

        if (!existingDifficulties || existingTags.length !== createPostDto.tags.length) {
            throw new BadRequestException("Incorrect tags or difficulty");
        }

        const postFolder = "posts";
        const fileData = await this.s3StorageService.uploadFile(file, postFolder);

        const createdPost = await this.prismaService.posts.create({
            data: {
                data_key: fileData.fileKey,
                title: createPostDto.title,
                description: createPostDto.description,
                users: {
                    connect: {
                        user_id: userId,
                    },
                },
                post_difficulties: {
                    connect: {
                        post_difficulty_id: existingDifficulties.post_difficulty_id,
                    },
                },
                posts_tags: {
                    createMany: {
                        data: existingTags.map(tag => ({
                            tag_id: tag.tag_id,
                        })),
                    },
                },
            },
            ...this.postsSelect(),
        });

        return this.transformPostData(createdPost);
    }

    async deletePost(postId: string) {
        const existingPost = await this.checkIfPostExists(postId);

        const deletedPost = await this.prismaService.posts.delete({
            where: {
                post_id: existingPost.post_id,
            },
            ...this.postsSelect(),
        });

        return this.transformPostData(deletedPost);
    }

    async updatePostData(postId: string, file: Express.Multer.File) {
        const existingPost = await this.checkIfPostExists(postId);
        const postFolder = "posts";

        const fileData = await this.s3StorageService.uploadFile(
            file,
            postFolder,
            existingPost.data_key,
        );

        const createdPost = await this.prismaService.posts.update({
            where: { post_id: postId },
            data: { data_key: fileData.fileKey },
            ...this.postsSelect(),
        });

        return this.transformPostData(createdPost);
    }

    async updatePost(postId: string, updatePostDto: UpdatePostDto) {
        const existingPost = await this.checkIfPostExists(postId);

        const updatedPost = await this.prismaService.posts.update({
            where: {
                post_id: existingPost.post_id,
            },
            data: {
                title: updatePostDto.title,
                description: updatePostDto.description,
            },
            ...this.postsSelect(),
        });

        return this.transformPostData(updatedPost);
    }

    async toggleLike(postId: string, userId: string, like: boolean) {
        await this.checkIfPostExists(postId);

        const exists = await this.prismaService.post_likes.findUnique({
            where: {
                post_id_user_id: {
                    user_id: userId,
                    post_id: postId,
                },
            },
        });

        if (!exists && !like) throw new BadRequestException("User didn't like this post");
        if (exists && like) throw new BadRequestException("User has already liked this post");

        const updatedPost = await this.prismaService.posts.update({
            where: { post_id: postId },
            data: {
                post_likes: like
                    ? { create: { user_id: userId } }
                    : {
                          delete: {
                              post_id_user_id: {
                                  post_id: postId,
                                  user_id: userId,
                              },
                          },
                      },
            },
            ...this.postsSelect(userId),
        });

        return this.transformPostData(updatedPost);
    }

    private async checkIfPostExists(postId: string) {
        const existingPost = await this.prismaService.posts.findUnique({
            where: { post_id: postId },
        });

        if (!existingPost) throw new NotFoundException("Post with such id not found");

        return existingPost;
    }

    private transformPostData(post: IPost) {
        const { _count, post_likes, closed_posts, posts_tags, ...postData } = post;

        return {
            ...postData,
            likes: _count.post_likes,
            data_url: `${this.BUCKET_URL}/${post.data_key}`,
            ...(post_likes && {
                isLiked: Boolean(post_likes.length),
            }),
            is_correct: closed_posts.length > 0,
            tags: posts_tags.map(pt => pt.tags),
        };
    }

    private postsSelect(userId?: string) {
        return {
            include: {
                ...POSTS_INCLUDE,
                post_likes: userId
                    ? {
                          where: { user_id: userId },
                          select: { user_id: true },
                      }
                    : false
            },
            ...POSTS_OMIT,
        };
    }
}
