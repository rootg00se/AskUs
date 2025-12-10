import { SmsService } from "@/libs/sms/sms.service";
import { PrismaService } from "@/prisma/prisma.service";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { token_type } from "@prisma/generated";

@Injectable()
export class TwoFactorAuthService {
    constructor(
        private readonly smsService: SmsService,
        private readonly prismaService: PrismaService,
    ) {}

    public async validateTwoFactorToken(userId: string, code: string) {
        const existingToken = await this.prismaService.tokens.findFirst({
            where: {
                user_id: userId,
                type: token_type.two_factor,
            },
        });

        if (!existingToken) {
            throw new NotFoundException("Token was not found. Check that you've got correct one");
        }

        const hasExpired = new Date(existingToken.expires_in) < new Date();
        if (hasExpired) throw new BadRequestException("Token has expired");

        if (existingToken.token !== code) {
            throw new BadRequestException(
                "Incorrect two factor auth code. Please check your code and try again",
            );
        }

        await this.prismaService.tokens.delete({ where: { token_id: existingToken.token_id } });
    }

    public async sendTwoFactorToken(userId: string, phone: string) {
        const twoFactorToken = await this.generateTwoFactorToken(userId);
        const smsText = `Value: '${twoFactorToken.token}'`;

        await this.smsService.sendSMS(phone, smsText);

        return true;
    }

    private async generateTwoFactorToken(userId: string) {
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        const expiresIn = new Date(new Date().getTime() + 3600 * 1000);

        const existingToken = await this.prismaService.tokens.findFirst({
            where: {
                user_id: userId,
                type: token_type.two_factor,
            },
        });

        if (existingToken) {
            await this.prismaService.tokens.delete({
                where: { token_id: existingToken.token_id },
            });
        }

        const twoFactorToken = await this.prismaService.tokens.create({
            data: {
                user_id: userId,
                token,
                expires_in: expiresIn,
                type: token_type.two_factor,
            },
        });

        return twoFactorToken;
    }
}
