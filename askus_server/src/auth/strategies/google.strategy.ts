import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthService } from "../auth.service";
import { UsersService } from "@/users/users.service";
import { provider_type } from "@prisma/generated";
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly authSerivce: AuthService,
        private readonly userService: UsersService,
        private readonly prismaService: PrismaService,
    ) {
        super({
            clientID: configService.getOrThrow<string>("GOOGLE_CLIENT_ID"),
            clientSecret: configService.getOrThrow<string>("GOOGLE_CLIENT_SECRET"),
            callbackURL: `${configService.getOrThrow<string>("APPLICATION_URL")}/api/v1/auth/oauth2/google/redirect`,
            scope: ["email", "profile"],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const user = await this.authSerivce.validateOAuthUser({
            email: profile.emails![0].value,
            displayName: profile.displayName,
        });

        await this.userService.createUserAccount({
            userId: user.user_id,
            provider: provider_type.google,
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
