import {
    Body,
    Controller,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    Patch,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthenticatedGuard } from "@/auth/guards/authenticated.guard";
import { Authorized } from "@/auth/decorators/authorized.decorator";
import { type IUser } from "@/libs/common/types/user.type";
import { UpdateNicknameDto } from "./dto/update-nickname.dto";
import { Enable2FADto } from "./dto/update-2fa.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { UserResponse } from "@/shared/docs-responses/user.response";
import { PostsArrayResponse } from "@/shared/docs-responses/post.response";
import { AnswersArrayResponse } from "@/shared/docs-responses/answer.response";
import { UpdateAvatarDto } from "./dto/update-avatar.dto";
import { RanksService } from "@/ranks/ranks.service";
import { UserRanksResponse } from "@/shared/docs-responses/user-ranks.response";

@Controller("users")
@UseGuards(AuthenticatedGuard)
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly ranksService: RanksService,
    ) {}

    @Get("info")
    @ApiOperation({
        summary: "User's profile info",
        description: "Returns full information about the user",
    })
    @ApiOkResponse({ description: "User returned", type: UserResponse })
    @UseGuards(AuthenticatedGuard)
    getUserInfo(@Authorized() user: IUser) {
        return user;
    }

    @Get(":id")
    @ApiOperation({
        summary: "User's profile info by id",
        description: "Returns full information about the user by it's id",
    })
    @ApiOkResponse({ description: "User returned", type: UserResponse })
    async getUserProfile(@Param("id") userId: string) {
        return await this.usersService.findById(userId);
    }

    @Get(":id/posts")
    @ApiOperation({
        summary: "Getting user's posts",
        description: "Returns all the posts that belongs to the user",
    })
    @ApiOkResponse({ description: "User's posts returned", type: PostsArrayResponse })
    async getUserPosts(@Param("id") userId: string) {
        return await this.usersService.getUserPosts(userId);
    }

    @Get(":id/answers")
    @ApiOperation({
        summary: "Getting user's answers",
        description: "Returns all the answers that belongs to the user",
    })
    @ApiOkResponse({ description: "User's answers returned", type: AnswersArrayResponse })
    async getUserAnswers(@Param("id") userId: string) {
        return await this.usersService.getUserAnswers(userId);
    }

    @Get(":id/ranks")
    @ApiOperation({
        summary: "Get rank information",
        description: "Returns full information about user rank",
    })
    @ApiOkResponse({ description: "Rank information returned", type: UserRanksResponse })
    async getUserRankFullInfo(@Param("id") userId: string) {
        return await this.ranksService.getFullUserRankInformation(userId);
    }

    @Patch("nickname")
    @ApiOperation({
        summary: "Updating user's nickname",
        description: "Changes user's nickname to a new one",
    })
    @ApiOkResponse({ description: "User's nickname changed", type: UserResponse })
    @UseGuards(AuthenticatedGuard)
    async updateUserNickname(
        @Authorized("user_id") userId: string,
        @Body() updateNicknameDto: UpdateNicknameDto,
    ) {
        return await this.usersService.updateUserNickname(userId, updateNicknameDto.nickname);
    }

    @Patch("2fa/enable")
    @ApiOperation({
        summary: "Enabling user's 2fa",
        description: "Sets user's phone number and enables 2fa",
    })
    @ApiOkResponse({ description: "2FA enabled", type: UserResponse })
    @UseGuards(AuthenticatedGuard)
    async enableUser2FA(@Authorized("user_id") userId: string, @Body() enable2FADto: Enable2FADto) {
        return await this.usersService.enableUser2FA(userId, enable2FADto.phone);
    }

    @Patch("2fa/disable")
    @ApiOperation({
        summary: "Disabling user's 2fa",
        description: "Sets user's phone number to null and disables 2fa",
    })
    @ApiOkResponse({ description: "2FA disabled", type: UserResponse })
    @UseGuards(AuthenticatedGuard)
    async disableUser2FA(@Authorized("user_id") userId: string) {
        return await this.usersService.disableUser2FA(userId);
    }

    @Patch("avatar")
    @ApiOperation({
        summary: "Updating user's avatar",
        description: "Changes user's avatar to a new one and stores it in s3 storage",
    })
    @ApiConsumes("multipart/form-data")
    @ApiBody({ type: UpdateAvatarDto })
    @ApiOkResponse({ description: "Avatar updated", type: UserResponse })
    @UseInterceptors(FileInterceptor("avatar"))
    @UseGuards(AuthenticatedGuard)
    async updateUserAvatar(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new FileTypeValidator({
                        fileType: /^(image\/)(jpeg|jpg|png|webp|gif)$/,
                    }),
                    new MaxFileSizeValidator({
                        maxSize: 1000 * 1000 * 100,
                        message: "Can't load files larger than 10 mb",
                    }),
                ],
            }),
        )
        file: Express.Multer.File,
        @Authorized("user_id") userId: string,
    ) {
        return await this.usersService.updateUserAvatar(userId, file);
    }
}
