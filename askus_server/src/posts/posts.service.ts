import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { GetAllPostsDto } from "./dto/get-all-posts.dto";

@Injectable()
export class PostsService {
    constructor(private readonly prismaService: PrismaService) {}

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
}
