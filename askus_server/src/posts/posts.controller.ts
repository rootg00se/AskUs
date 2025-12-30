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
import { GetPopularPostsDto } from "./dto/get-popular-posts.dto";
import { CacheInterceptor, CacheKey } from "@nestjs/cache-manager";
import { ApiBody, ApiConsumes, ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import {
    PostResponse,
    PostResponseWithLike,
    PostsArrayWithLikeResponse,
} from "@/shared/docs-responses/post.response";
import { UpdateAvatarDto } from "@/users/dto/update-avatar.dto";
import { GetAllAnswersDto } from "@/answers/dto/get-all-answers.dto";
import { AnswersService } from "@/answers/answers.service";
import { CreateAnswerDto } from "@/answers/dto/create-answer.dto";
import { AnswerResponse, AnswersArrayResponse } from "@/shared/docs-responses/answer.response";

@Controller("posts")
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
        private readonly answersService: AnswersService,
    ) {}

    @Get()
    @ApiOperation({
        summary: "All posts",
        description: "Returns full information about the posts",
    })
    @ApiOkResponse({ description: "Posts returned", type: PostsArrayWithLikeResponse })
    async getAllPosts(
        @Query() getAllPostsDto: GetAllPostsDto,
        @Authorized("user_id") userId: string,
    ) {
        return await this.postsService.getAllPosts(getAllPostsDto, userId);
    }

    @Get("popular")
    @ApiOperation({
        summary: "Get all popular posts",
        description: "Returns full information about the popular posts",
    })
    @ApiOkResponse({ description: "Posts returned", type: PostsArrayWithLikeResponse })
    @UseInterceptors(CacheInterceptor)
    @CacheKey("posts:popular")
    async getPopularPosts(
        @Query() getPopularPostsDto: GetPopularPostsDto,
        @Authorized("user_id") userId: string,
    ) {
        return await this.postsService.getPopularPosts(getPopularPostsDto.limit, userId);
    }

    @Get(":id")
    @ApiOperation({
        summary: "Get post by id",
        description: "Returns full information about the post",
    })
    @ApiOkResponse({ description: "Post returned", type: PostResponseWithLike })
    async getPostById(@Param("id") id: string, @Authorized("user_id") userId: string) {
        return await this.postsService.getPostById(id, userId);
    }

    @Post()
    @ApiOperation({
        summary: "Create post",
        description: "Creates new post and returns it",
    })
    @ApiOkResponse({ description: "Post created", type: PostResponse })
    @ApiConsumes("multipart/form-data")
    @ApiBody({ type: CreatePostDto })
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
    @ApiOperation({
        summary: "Update post data",
        description: "Updates post data md file",
    })
    @ApiOkResponse({ description: "Post updated", type: PostResponse })
    @ApiConsumes("multipart/form-data")
    @ApiBody({ type: UpdateAvatarDto })
    @UseInterceptors(FileInterceptor("post"))
    @UseGuards(AuthenticatedGuard)
    async updatePostData(
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
        @Param("id") postId: string,
    ) {
        validateMarkdown(file);
        const result = await this.postsService.updatePostData(postId, file);

        return result;
    }

    @Put(":id")
    @ApiOperation({
        summary: "Update post information",
        description: "Updates post title and description",
    })
    @ApiOkResponse({ description: "Post updated", type: PostResponse })
    @UseGuards(AuthenticatedGuard)
    async updatePostInformation(@Body() updatePostDto: UpdatePostDto, @Param("id") postId: string) {
        return await this.postsService.updatePost(postId, updatePostDto);
    }

    @Post(":id/like")
    @ApiOperation({
        summary: "Like post",
        description: "Increase post like count",
    })
    @ApiOkResponse({ description: "Post liked", type: PostResponseWithLike })
    @UseGuards(AuthenticatedGuard)
    async likePost(@Param("id") postId: string, @Authorized("user_id") userId: string) {
        return await this.postsService.toggleLike(postId, userId, true);
    }

    @Delete(":id")
    @ApiOperation({
        summary: "Delete Post",
        description: "Completly delete post with all data files",
    })
    @ApiOkResponse({ description: "Post deleted", type: PostResponse })
    @UseGuards(AuthenticatedGuard)
    async deletePost(@Param("id") postId: string) {
        return await this.postsService.deletePost(postId);
    }

    @Delete(":id/like")
    @ApiOperation({
        summary: "Dislike post",
        description: "Decrease post like count",
    })
    @ApiOkResponse({ description: "Post disliked", type: PostResponseWithLike })
    @UseGuards(AuthenticatedGuard)
    async dislikePost(@Param("id") postId: string, @Authorized("user_id") userId: string) {
        return await this.postsService.toggleLike(postId, userId, false);
    }

    @Get(":id/answers")
    @ApiOperation({
        summary: "Get all answers",
        description: "Returns all answers of the post",
    })
    @ApiOkResponse({ description: "Answers returned", type: AnswersArrayResponse })
    async getPostAnswers(@Param("id") postId: string, @Query() getAllAnswersDto: GetAllAnswersDto) {
        return await this.answersService.getAllPostAnswer(postId, getAllAnswersDto);
    }

    @Post(":id/answers")
    @ApiOperation({
        summary: "Create answer",
        description: "Create's new answer and returns it",
    })
    @ApiOkResponse({ description: "Answer created", type: AnswerResponse })
    @UseGuards(AuthenticatedGuard)
    async createAnswerForPost(
        @Param("id") postId: string,
        @Body() createAnswerDto: CreateAnswerDto,
        @Authorized("user_id") userId: string,
    ) {
        return await this.answersService.createAnswer(
            postId,
            userId,
            createAnswerDto,
            createAnswerDto.answerId,
        );
    }
}
