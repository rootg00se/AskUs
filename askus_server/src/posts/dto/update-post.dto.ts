import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class UpdatePostDto {
    @ApiProperty({
        description: "Post title",
        example: "Title new",
        type: String,
    })
    @IsNotEmpty({ message: "Title can't be empty" })
    @Length(2, 64, { message: "Title length should be between 2 and 64 symbols" })
    @IsString({ message: "Title should be a string" })
    title: string;
}
