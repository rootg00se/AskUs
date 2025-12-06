import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "@/users/users.module";
import { LocalStrategy } from "./strategies/local.strategy";
import { SessionSerializer } from "./utils/session.serializer";
import { GoogleStrategy } from "./strategies/google.strategy";
import { GithubStrategy } from "./strategies/github.strategy";
import { DiscordStrategy } from "./strategies/discord.strategy";
import { GoogleRecaptchaModule } from "@nestlab/google-recaptcha";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { googleRecaptchaConfig } from "@/config/google-recaptcha.config";
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { EmailConfirmationService } from "./email-confirmation/email-confirmation.service";
import { MailService } from "@/libs/mail/mail.service";

@Module({
    imports: [
        GoogleRecaptchaModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: googleRecaptchaConfig,
            inject: [ConfigService],
        }),
        PassportModule.register({ session: true }),
        UsersModule,
        EmailConfirmationModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalStrategy,
        GoogleStrategy,
        GithubStrategy,
        DiscordStrategy,
        SessionSerializer
    ],
})
export class AuthModule {}
