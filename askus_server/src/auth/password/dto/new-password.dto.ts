import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class NewPasswordDto {
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
