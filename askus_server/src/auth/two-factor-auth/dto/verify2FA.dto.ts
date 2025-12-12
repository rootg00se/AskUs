import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class Verify2FADto {
    @ApiProperty({
        description: "two factor auth code",
        example: "123456",
        type: String,
    })
    @IsString({ message: "code must be a string" })
    @IsNotEmpty({ message: "code can't be empty" })
    code: string;
}
