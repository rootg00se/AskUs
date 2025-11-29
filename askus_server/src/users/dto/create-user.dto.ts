import { IsEmail, IsNotEmpty, IsString, Length, Validate } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, { message: "Email is invalid" })
    email: string;

    @IsString({ message: "Email should be a string" })
    @IsNotEmpty({ message: "Email can't be empty" })
    @Length(2, 64, { message: "Email length should be between 2 and 64 characters" })
    displayName: string;

    @IsString({ message: "Password should be a string" })
    @IsNotEmpty({ message: "Password can't be empty" })
    @Length(8, 16, { message: "Password length should be between 8 and 16 characters" })
    password: string;
}
