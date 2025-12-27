import { UsersService } from "@/users/users.service";
import { BadRequestException, Injectable } from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto";
import { hash, verify } from "argon2";
import { LoginDto } from "./dto/login.dto";
import { IUser } from "@/libs/common/types/user.type";
import { OAuthUserDetails } from "@/libs/common/types/oauth-user-details.type";
import { EmailConfirmationService } from "./email-confirmation/email-confirmation.service";
import { PrismaService } from "@/prisma/prisma.service";
import { ValidateOAuthUserType } from "./types/validate-oauth-user.type";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly emailConfirmationService: EmailConfirmationService,
        private readonly prismaService: PrismaService
    ) {}

    async register(userData: RegisterDto) {
        const existingUser = await this.usersService.findByEmail(userData.email);

        if (existingUser)
            throw new BadRequestException("User with that email already authenticated");

        const hashedPassword = await hash(userData.password);

        const createdUser = await this.usersService.createUserWithCredentials({
            email: userData.email,
            displayName: userData.displayName,
            password: hashedPassword,
        });

        await this.emailConfirmationService.sendConfirmationToken(createdUser);

        return createdUser;
    }

    async validateUser(userData: LoginDto): Promise<null | IUser> {
        const user = await this.usersService.findFullUserByEmail(userData.email);
        if (!user) return null;

        if (user.accounts.length > 0 && !user.password_hash) {
            throw new BadRequestException(
                "This email is already being used for authorization with oauth2 providers",
            );
        }

        const isPasswordsMathcing = await verify(user!.password_hash!, userData.password);
        if (!isPasswordsMathcing) return null;

        const { password_hash, accounts, ...userResult } = user;

        return userResult;
    }

    private async findOrCreateOAuthUserByEmail(userDetails: OAuthUserDetails) {
        const user = await this.usersService.findByEmail(userDetails.email);
        if (user) return user;

        const createdUser = await this.usersService.createOAuthUser({
            email: userDetails.email,
            displayName: userDetails.email,
            avatarUrl: userDetails.avatarUrl
        });

        return createdUser;
    }

    async validateOAuthUser(validateOAuthUserType: ValidateOAuthUserType) {
        const user = await this.findOrCreateOAuthUserByEmail({
            email: validateOAuthUserType.email, 
            displayName: validateOAuthUserType.displayName,
            avatarUrl: validateOAuthUserType.avatarUrl
        });

        await this.usersService.createUserAccount({
            userId: user.user_id,
            provider: validateOAuthUserType.providerType,
            providerAccountId: validateOAuthUserType.profileId,
            accessToken: validateOAuthUserType.accessToken,
            refreshToken: validateOAuthUserType.refreshToken,
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
