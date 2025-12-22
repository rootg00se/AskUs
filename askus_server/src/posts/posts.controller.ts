import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    Patch,
    Post,
    Put,
    Query,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { GetAllPostsDto } from "./dto/get-all-posts.dto";
import { AuthenticatedGuard } from "@/auth/guards/authenticated.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { Authorized } from "@/auth/decorators/authorized.decorator";
import { CreatePostDto } from "./dto/create-post.dto";
import { validateMarkdown } from "./utils/validate-markdown.util";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { UpdatePostDto } from "./dto/update-post.dto";

@Controller("posts")
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    async getAllPosts(
        @Query() getAllPostsDto: GetAllPostsDto,
        @Authorized("user_id") userId: string,
    ) {
        return await this.postsService.getAllPosts(getAllPostsDto, userId);
    }

    @Get(":id")
    async getPostById(@Param("id") id: string, @Authorized("user_id") userId: string) {
        return await this.postsService.getPostById(id, userId);
    }

    @Post()
    @UseGuards(AuthenticatedGuard)
    @UseInterceptors(FileInterceptor("post"))
    async createPost(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({
                        maxSize: 1000 * 1000 * 50,
                        message: "Can't load files larger than 5 mb",
                    }),
                ],
            }),
        )
        file: Express.Multer.File,
        @Authorized("user_id") userId: string,
        @Body("data") data: string,
    ) {
        let createPostDto: CreatePostDto = plainToInstance(CreatePostDto, JSON.parse(data));

        const errors = await validate(createPostDto);

        if (errors.length > 0) {
            const errorMessages = errors.flatMap(error =>
                error.constraints ? Object.values(error.constraints) : [],
            );

            throw new BadRequestException(errorMessages);
        }

        validateMarkdown(file);

        const result = await this.postsService.createPost(file, userId, createPostDto);

        return result;
    }

    @Patch(":id/data")
    @UseGuards(AuthenticatedGuard)
    updatePostData() {}

    @Put(":id")
    @UseGuards(AuthenticatedGuard)
    async updatePostInformation(@Body() updatePostDto: UpdatePostDto, @Param("id") postId: string) {
        return await this.postsService.updatePost(postId, updatePostDto);
    }

    @Post(":id/like")
    @UseGuards(AuthenticatedGuard)
    async likePost(@Param("id") postId: string, @Authorized("user_id") userId: string) {
        return await this.postsService.likePost(postId, userId);
    }

    @Delete(":id")
    @UseGuards(AuthenticatedGuard)
    async deletePost(@Param("id") postId: string) {
        return await this.postsService.deletePost(postId);
    }

    @Delete(":id/like")
    @UseGuards(AuthenticatedGuard)
    async dislikePost(@Param("id") postId: string, @Authorized("user_id") userId: string) {
        return await this.postsService.dislikePost(postId, userId);
    }
}
