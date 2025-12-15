import { IsPasswordsMatchingConstraint } from "@/libs/common/decorators/passwords-matching.decorator";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length, Validate } from "class-validator";

export class RegisterDto {
    @ApiProperty({
        description: "User's email adress",
        example: "test@gmail.com",
        type: String,
    })
    @IsEmail({}, { message: "Email is invalid" })
    email: string;
 
    @ApiProperty({
        description: "User's displayName",
        example: "RootG00se",
        type: String,
    })
    @IsString({ message: "Nickname should be a string" })
    @IsNotEmpty({ message: "Nickname can't be empty" })
    @Length(2, 64, { message: "Nickname length should be between 2 and 64 characters" })
    displayName: string;

    @ApiProperty({
        description: "User's password",
        example: "!test_password12",
        type: String,
    })
    @IsString({ message: "Password should be a string" })
    @IsNotEmpty({ message: "Password can't be empty" })
    @Length(8, 16, { message: "Password length should be between 8 and 16 characters" })
    password: string;

    @ApiProperty({
        description: "Property that should match user's password",
        example: "!test_password12",
        type: String,
    })
    @Validate(IsPasswordsMatchingConstraint)
    repeatPassword: string;
}
