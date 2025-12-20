import { PrismaService } from "@/prisma/prisma.service";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { GetAllPostsDto } from "./dto/get-all-posts.dto";
import { CreatePostDto } from "./dto/create-post.dto";
import { S3StorageService } from "@/libs/s3-storage/s3-storage.service";

@Injectable()
export class PostsService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly s3StorageService: S3StorageService,
    ) {}

    async getAllPosts(getAllPostsDto: GetAllPostsDto) {
        const pageLimit = getAllPostsDto.pageLimit || 10;
        const postsToSkip = (getAllPostsDto.page || 0) * pageLimit;
        const difficulties = getAllPostsDto.difficulty?.split(",") || [];
        const tags = getAllPostsDto.tags?.split(",") || [];

        const posts = await this.prismaService.posts.findMany({
            skip: postsToSkip,
            take: pageLimit,
            where: {
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
            include: {
                _count: {
                    select: { post_likes: true },
                },
                post_difficulties: { omit: { post_difficulty_id: true } },
                users: {
                    select: {
                        display_name: true,
                        avatar_url: true,
                    },
                },
                posts_tags: {
                    select: {
                        tags: { select: { tag: true } },
                    },
                },
            },
            omit: { user_id: true, post_difficulty_id: true },
        });

        return posts.map(({ _count, posts_tags, ...post }) => ({
            ...post,
            likes: _count.post_likes,
            tags: posts_tags.map(pt => pt.tags.tag),
        }));
    }

    async getPostById(postId: string) {
        const posts = await this.prismaService.posts.findFirst({
            where: {
                post_id: postId,
            },
            include: {
                _count: {
                    select: { post_likes: true },
                },
                post_difficulties: { omit: { post_difficulty_id: true } },
                users: {
                    select: {
                        display_name: true,
                        avatar_url: true,
                    },
                },
                posts_tags: {
                    select: {
                        tags: { select: { tag: true } },
                    },
                },
            },
            omit: { user_id: true, post_difficulty_id: true },
        });

        if (!posts) throw new NotFoundException("Post with that id was not found");

        const { _count, posts_tags, ...post } = posts;

        return {
            ...post,
            likes: _count.post_likes,
            tags: posts_tags.map(pt => pt.tags.tag),
        };
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
        const dataUrl = await this.s3StorageService.uploadFile(file, postFolder);

        const createdPost = await this.prismaService.posts.create({
            data: {
                data_url: dataUrl,
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
            include: {
                _count: {
                    select: { post_likes: true },
                },
                post_difficulties: { omit: { post_difficulty_id: true } },
                users: {
                    select: {
                        display_name: true,
                        avatar_url: true,
                    },
                },
                posts_tags: {
                    select: {
                        tags: { select: { tag: true } },
                    },
                },
            },
            omit: { user_id: true, post_difficulty_id: true },
        });

        const { _count, posts_tags, ...post } = createdPost;

        return {
            ...post,
            likes: _count.post_likes,
            tags: posts_tags.map(pt => pt.tags.tag),
        };
    }
}
