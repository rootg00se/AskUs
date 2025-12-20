import { IsArray, IsNotEmpty, IsString, Length } from "class-validator";

export class CreatePostDto {
    @IsNotEmpty({ message: "Title can't be empty" })
    @Length(2, 64, { message: "Title length should be between 2 and 64 symbols" })
    @IsString({ message: "Title should be a string" })
    title: string;

    @IsNotEmpty({ message: "Description can't be empty" })
    @Length(2, 254, { message: "Title length should be between 2 and 254 symbols" })
    @IsString({ message: "Desciption should be a string" })
    description: string;

    @IsNotEmpty({ message: "Difficulty can't be empty" })
    @IsString({ message: "Difficulty should be a string" })
    difficulty: string;

    @IsNotEmpty({ message: "Tags can't be emtpy" })
    @IsArray({ message: "Tags shouls be an array" })
    tags: string[];
}
