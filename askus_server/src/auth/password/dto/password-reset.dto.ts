import { IsEmail, IsNotEmpty } from "class-validator";

export class PasswordResetDto {
    @IsEmail({}, { message: "Incorrect email" })
    @IsNotEmpty({ message: "Email can't be empty" })
    email: string;
}
