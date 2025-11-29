import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {
    @IsEmail({}, { message: "Email is invalid" })
    email: string;

    @IsString({ message: "Password should be a string" })
    @IsNotEmpty({ message: "Password can't be empty" })
    @Length(8, 16, { message: "Password length should be between 8 and 16 characters" })
    password: string;
}
