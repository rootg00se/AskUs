import { Controller, Get, Param, Req, Res } from "@nestjs/common";
import { EmailConfirmationService } from "./email-confirmation.service";
import { type Request, type Response } from "express";
import { ConfigService } from "@nestjs/config";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";

@Controller("auth/email-confirmation")
export class EmailConfirmationController {
    private readonly CLIENT_ORIGIN: string;

    constructor(
        private readonly emailConfirmationService: EmailConfirmationService,
        private readonly configSerivce: ConfigService,
    ) {
        this.CLIENT_ORIGIN = this.configSerivce.getOrThrow<string>("CLIENT_ORIGIN");
    }

    @Get(":token")
    @ApiOperation({
        summary: "Confirm email",
        description: "After following confirmation link on email this route will verify user",
    })
    @ApiOkResponse({ description: "Email confirmed" })
    public async newConfirmation(
        @Req() req: Request,
        @Res() res: Response,
        @Param("token") token: string,
    ) {
        const user = await this.emailConfirmationService.newConfirmation(token);

        await new Promise<void>((resolve, reject) => {
            req.login(user, err => {
                if (err) reject(err);
                resolve();
            });
        });

        res.status(302).redirect(`${this.CLIENT_ORIGIN}/confirm`);
    }
}
