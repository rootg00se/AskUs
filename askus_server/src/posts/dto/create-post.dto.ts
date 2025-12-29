import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString, Length } from "class-validator";

export class CreatePostDto {
    @ApiProperty({
        description: "Post title",
        example: "Title new",
        type: String,
    })
    @IsNotEmpty({ message: "Title can't be empty" })
    @Length(2, 64, { message: "Title length should be between 2 and 64 symbols" })
    @IsString({ message: "Title should be a string" })
    title: string;

    @ApiProperty({
        description: "Post description",
        example: "Some post description",
        type: String,
    })
    @IsNotEmpty({ message: "Description can't be empty" })
    @Length(2, 254, { message: "Title length should be between 2 and 254 symbols" })
    @IsString({ message: "Desciption should be a string" })
    description: string;

    @ApiProperty({
        description: "Difficulty of the post",
        example: "hard",
        type: String,
    })
    @IsNotEmpty({ message: "Difficulty can't be empty" })
    @IsString({ message: "Difficulty should be a string" })
    difficulty: string;

    @ApiProperty({
        description: "Tags for the post",
        example: ["programming", "cooking"],
        type: Array<string>,
    })
    @IsNotEmpty({ message: "Tags can't be emtpy" })
    @IsArray({ message: "Tags shouls be an array" })
    tags: string[];

    @ApiProperty({
        type: "string",
        format: "binary",
        description: "Post data md file",
    })
    avatar?: any;
}
