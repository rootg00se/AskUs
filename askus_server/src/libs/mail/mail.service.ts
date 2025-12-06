import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ConfirmationTemplate } from "./templates/confirmation.template";
import { render } from "@react-email/components";

@Injectable()
export class MailService {
    public constructor(
        private readonly mailerService: MailerService,
        private readonly configService: ConfigService,
    ) {}

    public async sendConfirmationEmail(email: string, token: string) {
        const origin = this.configService.getOrThrow<string>("APPLICATION_URL");
        const domain = `${origin}/api/v1`;
        const html = await render(ConfirmationTemplate({ domain, token }));

        return this.sendMail(email, "Email confirmation", html);
    }

    private sendMail(email: string, subject: string, html: string) {
        return this.mailerService.sendMail({
            to: email,
            subject,
            html,
        });
    }
}