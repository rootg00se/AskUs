import { Controller, Delete, Get, Patch, Post, Put, Query, UseGuards } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { GetAllPostsDto } from "./dto/get-all-posts.dto";
import { AuthenticatedGuard } from "@/auth/guards/authenticated.guard";

@Controller("posts")
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    async getAllPosts(@Query() getAllPostsDto: GetAllPostsDto) {
        return await this.postsService.getAllPosts(getAllPostsDto);
    }

    @Get(":id")
    getPostById() {}

    @Post()
    @UseGuards(AuthenticatedGuard)
    createPost() {}

    @Patch(":id/data")
    @UseGuards(AuthenticatedGuard)
    updatePostData() {}

    @Put(":id")
    @UseGuards(AuthenticatedGuard)
    updatePostInformation() {}

    @Post(":id/like")
    @UseGuards(AuthenticatedGuard)
    likePost() {}
    
    @Delete(":id")
    @UseGuards(AuthenticatedGuard)
    deletePost() {}

    @Delete(":id/like")
    @UseGuards(AuthenticatedGuard)
    dislikePost() {}
}
