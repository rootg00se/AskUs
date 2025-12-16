import {
    Body,
    Controller,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
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

@Controller("users")
@UseGuards(AuthenticatedGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get("info")
    getUserInfo(@Authorized() user: IUser) {
        return user;
    }

    @Get("posts")
    async getUserPosts(@Authorized("user_id") userId: string) {
        return await this.usersService.getUserPosts(userId);
    }

    @Get("answers")
    async getUserAnswers(@Authorized("user_id") userId: string) {
        return await this.usersService.getUserAnswers(userId);
    }

    @Patch("nickname")
    async updateUserNickname(
        @Authorized("user_id") userId: string,
        @Body() updateNicknameDto: UpdateNicknameDto,
    ) {
        return await this.usersService.updateUserNickname(userId, updateNicknameDto.nickname);
    }

    @Patch("2fa/enable")
    async enableUser2FA(@Authorized("user_id") userId: string, @Body() enable2FADto: Enable2FADto) {
        return await this.usersService.enableUser2FA(userId, enable2FADto.phone);
    }

    @Patch("2fa/disable")
    async disableUser2FA(@Authorized("user_id") userId: string) {
        return await this.usersService.disableUser2FA(userId);
    }

    @Patch("avatar")
    @UseInterceptors(FileInterceptor("avatar"))
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
