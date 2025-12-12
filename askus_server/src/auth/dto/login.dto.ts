import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {
    @ApiProperty({
        description: "User's email adress",
        example: "test@gmail.com",
        type: String,
    })
    @IsEmail({}, { message: "Email is invalid" })
    email: string;

    @ApiProperty({
        description: "User's password",
        example: "!test_password12",
        type: String,
    })
    @IsString({ message: "Password should be a string" })
    @IsNotEmpty({ message: "Password can't be empty" })
    @Length(8, 16, { message: "Password length should be between 8 and 16 characters" })
    password: string;
}
