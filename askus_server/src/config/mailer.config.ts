import { ConfigService } from "@nestjs/config";
import { type MailerOptions } from "@nestjs-modules/mailer";
import { isDev } from "@/libs/common/utils/is-dev.util";

export const mailerConfig = async (configService: ConfigService): Promise<MailerOptions> => ({
    transport: {
        host: configService.getOrThrow<string>("MAIL_HOST"),
        port: configService.getOrThrow<string>("MAIL_PORT"),
        secure: !isDev(configService),
        auth: {
            user: configService.getOrThrow<string>("MAIL_LOGIN"),
            pass: configService.getOrThrow<string>("MAIL_PASSWORD"),
        },
    },
    defaults: {
        from: configService.getOrThrow<string>("MAIL_LOGIN"),
    },
});
