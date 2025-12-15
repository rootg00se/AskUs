import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { auth_method } from "@prisma/generated";
import { CreateUser } from "./types/create-user.type";
import { OAuthUserDetails } from "@/libs/common/types/oauth-user-details.type";
import { CreateAccount } from "@/users/types/create-account.type";
import { S3StorageService } from "@/libs/s3-storage/s3-storage.service";

@Injectable()
export class UsersService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly s3StorageService: S3StorageService,
    ) {}

    async findByEmail(email: string) {
        return await this.prismaService.users.findUnique({
            where: { email },
            include: { accounts: true },
        });
    }

    async findFullUserByEmail(email: string) {
        return await this.prismaService.users.findUnique({
            where: { email },
            include: {
                user_ranks: {
                    select: {
                        points: true,
                        updated_at: true,
                        ranks: {
                            select: {
                                name: true,
                                badge_url: true,
                            },
                        },
                    },
                },
                accounts: true,
            },
        });
    }

    async findById(userId: string) {
        return await this.prismaService.users.findUnique({
            where: { user_id: userId },
            include: {
                user_ranks: {
                    select: {
                        points: true,
                        updated_at: true,
                        ranks: {
                            select: {
                                name: true,
                                badge_url: true,
                            },
                        },
                    },
                },
            },
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
                user_ranks: {
                    create: {
                        points: 0,
                    },
                },
            },
            include: {
                user_ranks: {
                    select: {
                        points: true,
                        updated_at: true,
                        ranks: {
                            select: {
                                name: true,
                                badge_url: true,
                            },
                        },
                    },
                },
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
                is_verified: true,
                user_ranks: {
                    create: {
                        points: 0,
                    },
                },
            },
            include: {
                user_ranks: {
                    select: {
                        points: true,
                        updated_at: true,
                        ranks: {
                            select: {
                                name: true,
                                badge_url: true,
                            },
                        },
                    },
                },
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
                    refresh_token: accountData.refreshToken || null,
                },
            });
        }
    }

    async getUserPosts(userId: string) {
        const userPosts = await this.prismaService.posts.findMany({
            where: {
                user_id: userId,
            },
        });

        return userPosts;
    }

    async getUserAnswers(userId: string) {
        const userAnswers = await this.prismaService.answers.findMany({
            where: {
                user_id: userId,
            },
        });

        return userAnswers;
    }

    async updateUserNickname(userId: string, nickname: string) {
        const updatedUser = await this.prismaService.users.update({
            where: {
                user_id: userId,
            },
            data: {
                display_name: nickname,
            },
            include: {
                user_ranks: {
                    select: {
                        points: true,
                        updated_at: true,
                        ranks: {
                            select: {
                                name: true,
                                badge_url: true,
                            },
                        },
                    },
                },
            },
            omit: {
                password_hash: true,
            },
        });

        return updatedUser;
    }

    async toggleUser2FA(userId: string, phone: string) {
        const user = await this.prismaService.users.findUnique({ where: { user_id: userId } });

        const updatedUser = await this.prismaService.users.update({
            where: {
                user_id: userId,
            },
            data: {
                phone,
                is_two_factor_enabled: !user?.is_two_factor_enabled,
            },
            include: {
                user_ranks: {
                    select: {
                        points: true,
                        updated_at: true,
                        ranks: {
                            select: {
                                name: true,
                                badge_url: true,
                            },
                        },
                    },
                },
            },
            omit: {
                password_hash: true,
            },
        });

        return updatedUser;
    }

    async updateUserAvatar(userId: string, file: Express.Multer.File) {
        const avatarFolder = "avatars";
        const avatarUrl = await this.s3StorageService.uploadFile(file, avatarFolder);

        const updatedUser = await this.prismaService.users.update({
            where: {
                user_id: userId,
            },
            data: {
                avatar_url: avatarUrl,
            },
            include: {
                user_ranks: {
                    select: {
                        points: true,
                        updated_at: true,
                        ranks: {
                            select: {
                                name: true,
                                badge_url: true,
                            },
                        },
                    },
                },
            },
            omit: {
                password_hash: true,
            },
        });

        return updatedUser;
    }
}
