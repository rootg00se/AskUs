import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import Strategy, { Profile } from "passport-discord";
import { AuthService } from "../auth.service";
import { UsersService } from "@/users/users.service";
import { PrismaService } from "@/prisma/prisma.service";
import { provider_type } from "@prisma/generated";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
        private readonly prismaService: PrismaService,
    ) {
        super({
            clientID: configService.getOrThrow<string>("DISCORD_CLIENT_ID"),
            clientSecret: configService.getOrThrow<string>("DISCORD_CLIENT_SECRET"),
            callbackURL: `${configService.getOrThrow<string>("APPLICATION_URL")}/api/v1/auth/oauth2/discord/redirect`,
            scope: ["identify", "email"],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const user = await this.authService.validateOAuthUser({
            email: profile.email!,
            displayName: profile.displayName,
        });

        await this.usersService.createUserAccount({
            userId: user.user_id,
            provider: provider_type.discord,
            providerAccountId: profile.id,
            accessToken,
            refreshToken,
        });

        if (!user.is_verified) {
            await this.prismaService.users.update({
                where: { user_id: user.user_id },
                data: { is_verified: true },
            });
        }

        return user;
    }
}
