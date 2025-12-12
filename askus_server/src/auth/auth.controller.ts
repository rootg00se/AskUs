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
import { Recaptcha } from "@nestlab/google-recaptcha";
import { TwoFactorAuthService } from "./two-factor-auth/two-factor-auth.service";
import { EmailConfirmationService } from "./email-confirmation/email-confirmation.service";
import { OAuth2Guard } from "./guards/oauth2.guard";
import { provider_type } from "@prisma/generated";
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { UserResponse } from "./utils/docsResponses/user.response";
import { LoginDto } from "./dto/login.dto";

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
    @ApiOperation({
        summary: "Register user",
        description: "Creating user and then sending confirmation mail",
    })
    @ApiCreatedResponse({ description: "User created", type: UserResponse })
    @Recaptcha()
    async register(@Body() userData: RegisterDto) {
        const user = await this.authService.register(userData);

        return user;
    }

    @Post("login")
    @Recaptcha()
    @ApiOperation({
        summary: "Login user",
        description: "Login user into system or send's code via sms if 2fa enabled",
    })
    @ApiBody({ type: LoginDto })
    @ApiOkResponse({ description: "User loged in", type: UserResponse })
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
    @ApiOperation({
        summary: "Logout user",
        description: "Logout user from system",
    })
    @ApiOkResponse({ description: "User loged out" })
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
    @ApiOperation({ summary: "OAuth2 google" })
    @ApiCreatedResponse({ description: "Redirecting to google oauth2" })
    @UseGuards(OAuth2Guard(provider_type.google))
    googleOAuth() {}

    @Get("oauth2/google/redirect")
    @ApiOperation({ summary: "Google OAuth2 callback" })
    @ApiCreatedResponse({ description: "Creating session on server after success google oauth2" })
    @UseGuards(OAuth2Guard(provider_type.google))
    googleOAuthRedirect(@Res() res: Response) {
        res.status(302).redirect(this.CLIENT_URL);
    }

    @Get("oauth2/github")
    @ApiOperation({ summary: "OAuth2 github" })
    @ApiCreatedResponse({ description: "Redirecting to github oauth2" })
    @UseGuards(OAuth2Guard(provider_type.github))
    githubOAuth() {}

    @Get("oauth2/github/redirect")
    @ApiOperation({ summary: "Github OAuth2 callback" })
    @ApiCreatedResponse({ description: "Creating session on server after success github oauth2" })
    @UseGuards(OAuth2Guard(provider_type.github))
    githubOAuthRedirect(@Res() res: Response) {
        res.status(302).redirect(this.CLIENT_URL);
    }

    @Get("oauth2/discord")
    @ApiOperation({ summary: "OAuth2 discord" })
    @ApiCreatedResponse({ description: "Redirecting to discord oauth2" })
    @UseGuards(OAuth2Guard(provider_type.discord))
    discordOAuth() {}

    @Get("oauth2/discord/redirect")
    @ApiOperation({ summary: "Discord OAuth2 callback" })
    @ApiCreatedResponse({ description: "Creating session on server after success discord oauth2" })
    @UseGuards(OAuth2Guard(provider_type.discord))
    discordOAuthRedirect(@Res() res: Response) {
        res.status(302).redirect(this.CLIENT_URL);
    }
}
