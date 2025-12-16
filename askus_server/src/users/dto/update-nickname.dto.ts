import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class UpdateNicknameDto {
    @ApiProperty({
        description: "User's new nickname",
        example: "RootG00se New",
        type: String,
    })
    @IsString({ message: "Nickname should be a string" })
    @IsNotEmpty({ message: "Nickname can't be empty" })
    @Length(2, 64, { message: "Nickname length should be between 2 and 64 characters" })
    nickname: string;
}
