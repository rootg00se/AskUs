import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { auth_method } from "@prisma/generated";
import { CreateUser } from "./types/create-user.type";
import { OAuthUserDetails } from "@/libs/common/types/oauth-user-details.type";
import { CreateAccount } from "@/libs/common/types/create-account.type";

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {}

    async findByEmail(email: string) {
        return await this.prismaService.users.findUnique({ where: { email }, include: { accounts: true } });
    }

    async findById(userId: string) {
        return await this.prismaService.users.findUnique({
            where: { user_id: userId },
            omit: { password_hash: true },
        });
    }

    async createUserWithCredentials(userData: CreateUser) {
        return await this.prismaService.users.create({
            data: {
                email: userData.email,
                display_name: userData.displayName,
                password_hash: userData.password,
                method: auth_method.credentials,
            },
            omit: {
                password_hash: true,
            },
        });
    }

    async createOAuthUser(oauthUserDetails: OAuthUserDetails) {
        return await this.prismaService.users.create({
            data: {
                email: oauthUserDetails.email,
                display_name: oauthUserDetails.displayName,
                method: auth_method.oauth,
                is_verified: true
            },
            omit: {
                password_hash: true,
            },
        });
    }

    async createUserAccount(accountData: CreateAccount) {
        const account = await this.prismaService.accounts.findFirst({
            where: {
                provider: accountData.provider,
                provider_account_id: accountData.providerAccountId,
            },
        });

        if (!account) {
            await this.prismaService.accounts.create({
                data: {
                    provider: accountData.provider,
                    access_token: accountData.accessToken,
                    user_id: accountData.userId,
                    provider_account_id: accountData.providerAccountId,
                    refresh_token: accountData.refreshToken || null
                },
            });
        }
    }
}
