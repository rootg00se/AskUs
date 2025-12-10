import { IsNotEmpty, IsString } from "class-validator";

export class Verify2FADto {
    @IsString({ message: "code must be a string" })
    @IsNotEmpty({ message: "code can't be empty" })
    code: string;
}