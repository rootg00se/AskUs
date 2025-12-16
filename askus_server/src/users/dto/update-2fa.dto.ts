import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class Enable2FADto {
    @ApiProperty({
        description: "User's phone number",
        example: "79656077916",
        type: String,
    })
    @IsNotEmpty({ message: "Phone can't be empty" })
    @IsString({ message: "Phone must be a string" })
    @MaxLength(15, { message: "Phone length can't be greater than 15 symbols" })
    phone: string;
}
