import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import Strategy, { Profile } from "passport-discord";
import { AuthService } from "../auth.service";
import { provider_type } from "@prisma/generated";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly authService: AuthService,
    ) {
        super({
            clientID: configService.getOrThrow<string>("DISCORD_CLIENT_ID"),
            clientSecret: configService.getOrThrow<string>("DISCORD_CLIENT_SECRET"),
            callbackURL: `${configService.getOrThrow<string>("APPLICATION_URL")}/api/v1/auth/oauth2/discord/redirect`,
            scope: ["identify", "email"],
        });
    }
    
    authorizationParams(options: any) {
        return {
            ...options,
            prompt: "consent"
        }
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const isAnimated = profile.avatar?.startsWith("a_");
        const extension = isAnimated ? "gif" : "png";

        const avatarUrl = profile.avatar
            ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${extension}`
            : null;

        const user = await this.authService.validateOAuthUser({
            email: profile.email!,
            displayName: profile.global_name || profile.username,
            avatarUrl,
            accessToken,
            refreshToken,
            profileId: profile.id,
            providerType: provider_type.discord,
        });

        return user;
    }
}
