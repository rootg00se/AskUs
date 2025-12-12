import { Body, Controller, Post, Query } from "@nestjs/common";
import { PasswordService } from "./password.service";
import { Recaptcha } from "@nestlab/google-recaptcha";
import { PasswordResetDto } from "./dto/password-reset.dto";
import { NewPasswordDto } from "./dto/new-password.dto";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { UserResponse } from "../utils/docsResponses/user.response";

@Controller("auth/password")
export class PasswordController {
    constructor(private readonly passwordService: PasswordService) {}

    @Post("reset")
    @ApiOperation({
        summary: "Reseting user's password",
        description: "After user entered email he get's email for reseting password",
    })
    @ApiOkResponse({ description: "Password reset" })
    @Recaptcha()
    public async resetPassword(@Body() passwordResetDto: PasswordResetDto) {
        return this.passwordService.resetPassword(passwordResetDto);
    }

    @Post("new")
    @ApiOperation({
        summary: "Updating user password",
        description: "Updates user's password with new one after reset",
    })
    @ApiOkResponse({ description: "Password changed", type: UserResponse })
    @Recaptcha()
    public async newPassword(
        @Body() newPasswordDto: NewPasswordDto,
        @Query("token") token: string,
    ) {
        const { password_hash, ...user } = await this.passwordService.newPassword(
            newPasswordDto,
            token,
        );

        return user;
    }
}
