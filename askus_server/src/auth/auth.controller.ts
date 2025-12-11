import {
    Body,
    Controller,
    Get,
    InternalServerErrorException,
    Post,
    Req,
    Res,
    UnauthorizedException,
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
import { Recaptcha } from "@nestlab/google-recaptcha";
import { TwoFactorAuthService } from "./two-factor-auth/two-factor-auth.service";
import { EmailConfirmationService } from "./email-confirmation/email-confirmation.service";
import { OAuth2Guard } from "./guards/oauth2.guard";
import { provider_type } from "@prisma/generated";

@Controller("auth")
export class AuthController {
    private readonly CLIENT_URL: string;

    constructor(
        private readonly authService: AuthService,
        private readonly configService: ConfigService,
        private readonly twoFactorAuthService: TwoFactorAuthService,
        private readonly emailConfirmationService: EmailConfirmationService,
    ) {
        this.CLIENT_URL = configService.getOrThrow<string>("CLIENT_ORIGIN");
    }

    @Post("register")
    @Recaptcha()
    async register(@Body() userData: RegisterDto) {
        const user = await this.authService.register(userData);

        return user;
    }

    @Post("login")
    @Recaptcha()
    @UseGuards(ValidateLoginGuard, LocalGuard)
    async login(@Authorized() user: IUser, @Req() req: Request) {
        if (!user.is_verified) {
            await this.emailConfirmationService.sendConfirmationToken(user);

            throw new UnauthorizedException(
                "Your email isn't confirmed. Check your email for confirmation link",
            );
        }

        if (user.is_two_factor_enabled) {
            await this.twoFactorAuthService.sendTwoFactorToken(user.user_id, user.phone as string);

            req.session.preAuthUserId = user.user_id;

            return {
                twoFactorRequired: true,
                message: "Two factor code was send on phone number",
            };
        }

        await new Promise<void>((resolve, reject) => {
            req.login(user, err => {
                if (err) reject(err);
                resolve();
            });
        });

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
    @UseGuards(OAuth2Guard(provider_type.google))
    googleOAuth() {}

    @Get("oauth2/google/redirect")
    @UseGuards(OAuth2Guard(provider_type.google))
    googleOAuthRedirect(@Res() res: Response) {
        res.status(302).redirect(this.CLIENT_URL);
    }

    @Get("oauth2/github")
    @UseGuards(OAuth2Guard(provider_type.github))
    githubOAuth() {}

    @Get("oauth2/github/redirect")
    @UseGuards(OAuth2Guard(provider_type.github))
    githubOAuthRedirect(@Res() res: Response) {
        res.status(302).redirect(this.CLIENT_URL);
    }

    @Get("oauth2/discord")
    @UseGuards(OAuth2Guard(provider_type.discord))
    discordOAuth() {}

    @Get("oauth2/discord/redirect")
    @UseGuards(OAuth2Guard(provider_type.discord))
    discordOAuthRedirect(@Res() res: Response) {
        res.status(302).redirect(this.CLIENT_URL);
    }

    @Get("check")
    @UseGuards(AuthenticatedGuard)
    getUser(@Authorized() user: IUser) {
        return user;
    }
}
