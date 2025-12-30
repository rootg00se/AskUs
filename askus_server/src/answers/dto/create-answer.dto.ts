import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UpdateAnswerDto } from "./update-answer.dto";

export class CreateAnswerDto extends UpdateAnswerDto {
    @IsNotEmpty({ message: "Answer id can't be empty" })
    @IsString({ message: "Answer id must be a string" })
    @IsOptional()
    answerId?: string;
}
