import { IsNotEmpty, IsString, Length } from "class-validator";

export class UpdatePostDto {
    @IsNotEmpty({ message: "Title can't be empty" })
    @Length(2, 64, { message: "Title length should be between 2 and 64 symbols" })
    @IsString({ message: "Title should be a string" })
    title: string;

    @IsNotEmpty({ message: "Description can't be empty" })
    @Length(2, 254, { message: "Title length should be between 2 and 254 symbols" })
    @IsString({ message: "Desciption should be a string" })
    description: string;
}
