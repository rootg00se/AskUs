import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class Toggle2FADto {
    @IsNotEmpty({ message: "Phone can't be empty" })
    @IsString({ message: "Phone must be a string" })
    @MaxLength(15, { message: "Phone length can't be greater than 15 symbols" })
    phone: string;
}