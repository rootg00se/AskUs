import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class UpdateAnswerDto {
    @IsNotEmpty({ message: "Answer text can't be empty" })
    @IsString({ message: "Answer text must be a string" })
    @MinLength(2, { message: "Text should be at least 2 characters long" })
    text: string;
}
