import {
    BadRequestException,
    Body,
    Controller,
    NotFoundException,
    Post,
    Req,
} from "@nestjs/common";
import { TwoFactorAuthService } from "./two-factor-auth.service";
import { type Request } from "express";
import { Verify2FADto } from "./dto/verify2FA.dto";
import { UsersService } from "@/users/users.service";

@Controller("auth/2fa")
export class TwoFactorAuthController {
    constructor(
        private readonly twoFactorAuthService: TwoFactorAuthService,
        private readonly usersService: UsersService,
    ) {}

    @Post("verify")
    async verify2FA(@Body() verify2FADto: Verify2FADto, @Req() req: Request) {
        const userId = req.session.preAuthUserId;
        if (!userId) throw new BadRequestException("No partially authenticated session");

        await this.twoFactorAuthService.validateTwoFactorToken(userId, verify2FADto.code);

        const user = await this.usersService.findById(userId);
        if (!user) throw new NotFoundException("User with that id was not found");

        await new Promise<void>((resolve, reject) => {
            req.login(user, err => {
                if (err) reject(err);
                resolve();
            });
        });

        delete req.session.preAuthUserId;

        return user;
    }
}
