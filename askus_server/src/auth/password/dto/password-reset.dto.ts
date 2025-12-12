import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class PasswordResetDto {
    @ApiProperty({
        description: "User's email adress",
        example: "test@gmail.com",
        type: String,
    })
    @IsEmail({}, { message: "Incorrect email" })
    @IsNotEmpty({ message: "Email can't be empty" })
    email: string;
}
