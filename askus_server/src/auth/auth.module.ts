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

@Module({
    imports: [PassportModule.register({ session: true }), UsersModule],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalStrategy,
        GoogleStrategy,
        GithubStrategy,
        DiscordStrategy,
        SessionSerializer,
    ],
})
export class AuthModule {}
