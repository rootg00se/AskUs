import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-github2";
import { AuthService } from "../auth.service";
import { provider_type } from "@prisma/generated";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly authService: AuthService
    ) {
        super({
            clientID: configService.getOrThrow<string>("GITHUB_CLIENT_ID"),
            clientSecret: configService.getOrThrow<string>("GITHUB_CLIENT_SECRET"),
            callbackURL: `${configService.getOrThrow<string>("APPLICATION_URL")}/api/v1/auth/oauth2/github/redirect`,
            scope: ["user:email", "read:user"], 
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const user = await this.authService.validateOAuthUser({
            email: profile.emails![0].value,
            displayName: profile.displayName,
            avatarUrl: profile.photos![0].value || null,
            accessToken,
            refreshToken,
            profileId: profile.id,
            providerType: provider_type.github
        });

        return user;
    }
}
