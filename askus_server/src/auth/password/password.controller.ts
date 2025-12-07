import { Body, Controller, Post, Query } from "@nestjs/common";
import { PasswordService } from "./password.service";
import { Recaptcha } from "@nestlab/google-recaptcha";
import { PasswordResetDto } from "./dto/password-reset.dto";
import { NewPasswordDto } from "./dto/new-password.dto";

@Controller("auth/password")
export class PasswordController {
    constructor(private readonly passwordService: PasswordService) {}

    @Post("reset")
    @Recaptcha()
    public async resetPassword(@Body() passwordResetDto: PasswordResetDto) {
        return this.passwordService.resetPassword(passwordResetDto);
    }

    @Post("new")
    @Recaptcha()
    public async newPassword(
        @Body() newPasswordDto: NewPasswordDto,
        @Query("token") token: string,
    ) {
        const { password_hash, ...user } = await this.passwordService.newPassword(newPasswordDto, token);

        return user;
    }
}
