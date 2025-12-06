import { IUser } from "@/libs/common/types/user.type";
import { MailService } from "@/libs/mail/mail.service";
import { PrismaService } from "@/prisma/prisma.service";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { token_type } from "@prisma/generated";
import { v4 } from "uuid";
import { UsersService } from "@/users/users.service";

@Injectable()
export class EmailConfirmationService {
    public constructor(
        private readonly prismaService: PrismaService,
        private readonly mailService: MailService,
        private readonly userService: UsersService,
    ) {}

    public async newConfirmation(token: string) {
        const existingToken = await this.prismaService.tokens.findFirst({
            where: {
                token,
                type: token_type.verification,
            },
        });

        if (!existingToken) {
            throw new NotFoundException("Token was not found. Check that you've got correct one");
        }

        const hasExpired = new Date(existingToken.expires_in) < new Date();
        if (hasExpired) throw new BadRequestException("Token has expired");

        const existingUser = await this.userService.findById(existingToken.user_id);
        if (!existingUser) throw new NotFoundException("User with that id was not found");
        
        await this.prismaService.tokens.delete({ where: { token_id: existingToken.token_id } });

        const user = await this.prismaService.users.update({
            where: { user_id: existingUser.user_id },
            data: { is_verified: true },
        });

        return user;
    }

    public async sendConfirmationToken(user: IUser) {
        const confirmationToken = await this.generateConfirmationToken(user.user_id);
        await this.mailService.sendConfirmationEmail(user.email, confirmationToken.token);

        return true;
    }

    private async generateConfirmationToken(userId: string) {
        const token = v4();
        const expiresIn = new Date(new Date().getTime() + 3600 * 1000);

        const existingToken = await this.prismaService.tokens.findFirst({
            where: {
                user_id: userId,
                type: token_type.verification,
            },
        });

        if (existingToken) {
            await this.prismaService.tokens.delete({
                where: { token_id: existingToken.token_id },
            });
        }

        const confirmationToken = await this.prismaService.tokens.create({
            data: {
                user_id: userId,
                token,
                expires_in: expiresIn,
                type: token_type.verification,
            },
        });

        return confirmationToken;
    }
}
