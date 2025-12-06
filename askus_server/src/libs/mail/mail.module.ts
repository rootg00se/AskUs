import { Module } from "@nestjs/common";
import { MailService } from "./mail.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { mailerConfig } from "@/config/mailer.config";

@Module({
    imports: [
        MailerModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: mailerConfig,
            inject: [ConfigService],
        }),
    ],
    providers: [MailService],
    exports: [MailService]
})
export class MailModule {}
