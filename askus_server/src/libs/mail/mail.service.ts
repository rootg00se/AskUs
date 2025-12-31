import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ConfirmationTemplate } from "./templates/confirmation.template";
import { render } from "@react-email/components";
import { PasswordResetTemplate } from "./templates/password-reset.template";

@Injectable()
export class MailService {
    private readonly ORIGIN: string;
    private readonly DOMAIN: string;

    public constructor(
        private readonly mailerService: MailerService,
        private readonly configService: ConfigService,
    ) {
        this.ORIGIN = this.configService.getOrThrow<string>("APPLICATION_URL");
        this.DOMAIN = `${this.ORIGIN}/api/v1`;
    }

    public async sendConfirmationEmail(email: string, token: string) {
        const html = await render(ConfirmationTemplate({ domain: this.DOMAIN, token }));

        return this.sendMail(email, "Email confirmation", html);
    }

    public async sendPasswordResetEmail(email: string, token: string) {
        const html = await render(PasswordResetTemplate({ domain: this.DOMAIN, token }));

        return this.sendMail(email, "Password Reset", html);
    }

    private sendMail(email: string, subject: string, html: string) {
        return this.mailerService.sendMail({
            to: email,
            subject,
            html,
        });
    }
}
