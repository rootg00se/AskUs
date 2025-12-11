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
        private readonly authService: AuthService
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
            accessToken,
            refreshToken,
            profileId: profile.id,
            providerType: provider_type.discord
        });

        return user;
    }
}
