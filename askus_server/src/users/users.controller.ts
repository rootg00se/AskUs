import { Body, Controller, Get, Patch, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthenticatedGuard } from "@/auth/guards/authenticated.guard";
import { Authorized } from "@/auth/decorators/authorized.decorator";
import { type IUser } from "@/libs/common/types/user.type";
import { UpdateNicknameDto } from "./dto/update-nickname.dto";
import { Toggle2FADto } from "./dto/update-2fa.dto";

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

    @Patch("2fa")
    async toggleUser2FA(@Authorized("user_id") userId: string, @Body() toggle2FADto: Toggle2FADto) {
        return await this.usersService.toggleUser2FA(userId, toggle2FADto.phone);
    }
}
