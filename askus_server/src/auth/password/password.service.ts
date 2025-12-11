import { MailService } from "@/libs/mail/mail.service";
import { PrismaService } from "@/prisma/prisma.service";
import { UsersService } from "@/users/users.service";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { token_type } from "@prisma/generated";
import { hash } from "argon2";
import { v4 } from "uuid";
import { NewPasswordDto } from "./dto/new-password.dto";
import { PasswordResetDto } from "./dto/password-reset.dto";

@Injectable()
export class PasswordService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly mailService: MailService,
        private readonly usersService: UsersService,
    ) {}

    public async resetPassword(passwordResetDto: PasswordResetDto) {
        const confirmationToken = await this.generatePasswordResetToken(passwordResetDto.email);

        await this.mailService.sendPasswordResetEmail(
            passwordResetDto.email,
            confirmationToken.token,
        );

        return true;
    }

    public async newPassword(newPasswordDto: NewPasswordDto, token: string) {
        const existingToken = await this.prismaService.tokens.findFirst({
            where: {
                token,
                type: token_type.password_reset,
            },
        });

        if (!existingToken) {
            throw new NotFoundException("Token was not found. Check that you've got correct one");
        }

        const hasExpired = new Date(existingToken.expires_in) < new Date();
        if (hasExpired) throw new BadRequestException("Token has expired");

        const existingUser = await this.usersService.findById(existingToken.user_id);
        if (!existingUser) throw new NotFoundException("User with that id was not found");

        await this.prismaService.tokens.delete({ where: { token_id: existingToken.token_id } });

        const user = await this.prismaService.users.update({
            where: { user_id: existingUser.user_id },
            data: { password_hash: await hash(newPasswordDto.password) },
        });

        return user;
    }

    private async generatePasswordResetToken(email: string) {
        const existingUser = await this.usersService.findByEmail(email); 
        if (!existingUser) throw new NotFoundException("User with that email was not found");

        const token = v4();
        const expiresIn = new Date(new Date().getTime() + 3600 * 1000);

        const existingToken = await this.prismaService.tokens.findFirst({
            where: {
                user_id: existingUser.user_id,
                type: token_type.password_reset,
            },
        });

        if (existingToken) {
            await this.prismaService.tokens.delete({
                where: { token_id: existingToken.token_id },
            });
        }

        const resetToken = await this.prismaService.tokens.create({
            data: {
                user_id: existingUser.user_id,
                token,
                expires_in: expiresIn,
                type: token_type.password_reset,
            },
        });

        return resetToken;
    }
}
