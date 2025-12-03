import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-github2";
import { AuthService } from "../auth.service";
import { UsersService } from "@/users/users.service";
import { PrismaService } from "@/prisma/prisma.service";
import { provider_type } from "@prisma/generated";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly authSerivce: AuthService,
        private readonly userService: UsersService,
        private readonly prismaService: PrismaService,
    ) {
        super({
            clientID: configService.getOrThrow<string>("GITHUB_CLIENT_ID"),
            clientSecret: configService.getOrThrow<string>("GITHUB_CLIENT_SECRET"),
            callbackURL: `${configService.getOrThrow<string>("APPLICATION_URL")}/api/v1/auth/oauth2/github/redirect`,
            scope: ["user:email", "read:user"],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const user = await this.authSerivce.validateOAuthUser({
            email: profile.emails![0].value,
            displayName: profile.displayName,
        });

        await this.userService.createUserAccount({
            userId: user.user_id,
            provider: provider_type.github,
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
