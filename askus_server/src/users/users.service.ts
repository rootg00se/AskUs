import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { auth_method, Prisma } from "@prisma/generated";
import { CreateUser } from "./types/create-user.type";
import { OAuthUserDetails } from "@/libs/common/types/oauth-user-details.type";
import { CreateAccount } from "@/users/types/create-account.type";
import { S3StorageService } from "@/libs/s3-storage/s3-storage.service";
import { USER_RANK_INCLUDE } from "./utils/user.constants";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UsersService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly s3StorageService: S3StorageService,
        private readonly configService: ConfigService,
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
                ...USER_RANK_INCLUDE,
                accounts: true,
            },
        });
    }

    async findById(userId: string) {
        return await this.prismaService.users.findUnique({
            where: { user_id: userId },
            include: {
                ...USER_RANK_INCLUDE,
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
                ...USER_RANK_INCLUDE,
            },
            omit: { password_hash: true },
        });
    }

    async createOAuthUser(oauthUserDetails: OAuthUserDetails) {
        return await this.prismaService.users.create({
            data: {
                email: oauthUserDetails.email,
                display_name: oauthUserDetails.displayName,
                method: auth_method.oauth,
                avatar_url: oauthUserDetails.avatarUrl,
                is_verified: true,
                user_ranks: {
                    create: {
                        points: 0,
                    },
                },
            },
            include: {
                ...USER_RANK_INCLUDE,
            },
            omit: { password_hash: true },
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
        const existingUser = await this.checkIfUserExists(userId);

        const userPosts = await this.prismaService.posts.findMany({
            where: { user_id: existingUser.user_id },
            include: {
                post_difficulties: true,
                _count: {
                    select: {
                        post_likes: true,
                    },
                },
                posts_tags: {
                    select: {
                        tags: { select: { tag: true } },
                    },
                },
                users: { select: { display_name: true, avatar_url: true } },
            },
            omit: { user_id: true, post_difficulty_id: true },
        });

        return userPosts.map(({ _count, posts_tags, ...post }) => ({
            ...post,
            likes: _count.post_likes,
            data_url: `${this.configService.getOrThrow<string>("S3_BUCKET_URL")}/${post.data_key}`,
            tags: posts_tags.map(pt => pt.tags.tag),
        }));
    }

    async getUserAnswers(userId: string) {
        const existingUser = await this.checkIfUserExists(userId);

        const userAnswers = await this.prismaService.answers.findMany({
            where: { user_id: existingUser.user_id },
            omit: { user_id: true, parent_id: true },
        });

        return userAnswers;
    }

    async updateUserNickname(userId: string, nickname: string) {
        const existingUser = await this.checkIfUserExists(userId);

        const updatedUser = await this.prismaService.users.update({
            where: { user_id: existingUser.user_id },
            data: { display_name: nickname },
            include: {
                ...USER_RANK_INCLUDE,
            },
            omit: { password_hash: true },
        });

        return updatedUser;
    }

    async enableUser2FA(userId: string, phone: string) {
        const existingUser = await this.checkIfUserExists(userId);

        const updatedUser = await this.prismaService.users.update({
            where: { user_id: existingUser.user_id },
            data: {
                phone,
                is_two_factor_enabled: true,
            },
            include: {
                ...USER_RANK_INCLUDE,
            },
            omit: { password_hash: true },
        });

        return updatedUser;
    }

    async disableUser2FA(userId: string) {
        const existingUser = await this.checkIfUserExists(userId);

        const updatedUser = await this.prismaService.users.update({
            where: { user_id: existingUser.user_id },
            data: {
                phone: null,
                is_two_factor_enabled: false,
            },
            include: {
                ...USER_RANK_INCLUDE,
            },
            omit: { password_hash: true },
        });

        return updatedUser;
    }

    async updateUserAvatar(userId: string, file: Express.Multer.File) {
        const existingUser = await this.checkIfUserExists(userId);
        const avatarFolder = "avatars";

        const fileData = await this.s3StorageService.uploadFile(
            file,
            avatarFolder,
            existingUser.avatar_key,
        );

        const updatedUser = await this.prismaService.users.update({
            where: { user_id: userId },
            data: { avatar_url: fileData.fileUrl, avatar_key: fileData.fileKey },
            include: {
                ...USER_RANK_INCLUDE,
            },
            omit: { password_hash: true },
        });

        return updatedUser;
    }

    private async checkIfUserExists(userId: string) {
        const existingUser = await this.prismaService.users.findUnique({
            where: { user_id: userId },
        });

        if (!existingUser) throw new NotFoundException("User with such id not found");

        return existingUser;
    }
}
