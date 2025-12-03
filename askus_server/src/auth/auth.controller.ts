import {
    Body,
    Controller,
    Get,
    HttpStatus,
    InternalServerErrorException,
    Post,
    Redirect,
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
import { AuthenticatedGuard } from "./guards/authenticated.guard";
import { GoogleAuthGuard } from "./guards/google-auth.guard";
import { GitHubAuthGuard } from "./guards/github-auth.guard";

@Controller("auth")
export class AuthController {
    private readonly CLIENT_URL: string;

    constructor(
        private readonly authService: AuthService,
        private readonly configService: ConfigService,
    ) {
        this.CLIENT_URL = configService.getOrThrow<string>("CLIENT_ORIGIN");
    }

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

    @Post("login")
    @UseGuards(ValidateLoginGuard, LocalGuard)
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

    @Get("oauth2/google")
    @UseGuards(GoogleAuthGuard)
    googleOAuth() {}

    @Get("oauth2/google/redirect")
    @UseGuards(GoogleAuthGuard)
    googleOAuthRedirect(@Res() res: Response) {
        res.status(302).redirect(this.CLIENT_URL);
    }

    @Get("oauth2/github")
    @UseGuards(GitHubAuthGuard)
    githubOAuth() {}

    @Get("oauth2/github/redirect")
    @UseGuards(GitHubAuthGuard)
    githubOAuthRedirect(@Res() res: Response) {
        res.status(302).redirect(this.CLIENT_URL);
    }

    @Get("check")
    @UseGuards(AuthenticatedGuard)
    getUser(@Authorized() user: IUser) {
        return user;
    }
}
