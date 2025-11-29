import {
    Body,
    Controller,
    Get,
    InternalServerErrorException,
    Post,
    Req,
    Res,
    UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { type Response, type Request } from "express";
import { LocalGuard } from "./guards/local.guard";
import { Authorized } from "./decorators/authorized.decorator";
import { type IUser } from "@/libs/common/types/user.type";
import { ValidateLoginGuard } from "./decorators/validate-login.decorator";
import { ConfigService } from "@nestjs/config";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly configService: ConfigService,
    ) {}

    @Post("register")
    async register(@Body() userData: RegisterDto, @Req() req: Request) {
        const user = await this.authService.register(userData);

        await new Promise<void>((resolve, reject) => {
            req.login(user, err => {
                if (err) reject(err);
                resolve();
            });
        });

        return user;
    }

    @UseGuards(ValidateLoginGuard, LocalGuard)
    @Post("login")
    async login(@Authorized() user: IUser) {
        return user;
    }

    @Post("logout")
    async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<void> {
        return new Promise((resolve, reject) => {
            req.logOut(err => {
                if (err) {
                    return reject(new InternalServerErrorException("Couldn't logout."));
                }

                req.session.destroy(destroyErr => {
                    if (destroyErr) {
                        return reject(new InternalServerErrorException("Couldn't delete session."));
                    }

                    res.clearCookie(this.configService.getOrThrow<string>("SESSION_NAME"));

                    resolve();
                });
            });
        });
    }
}
