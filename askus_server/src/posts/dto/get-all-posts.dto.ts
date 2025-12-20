import { Transform } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetAllPostsDto {
    @IsOptional()
    @IsInt({ message: "Current page must be an int number" })
    @Transform(({ value }) => Number.parseInt(value))
    page?: number;

    @IsOptional()
    @IsInt({ message: "Page limit must be an int number" })
    @Transform(({ value }) => Number.parseInt(value))
    pageLimit?: number;

    @IsOptional()
    tags?: string;

    @IsOptional()
    difficulty?: string;
}
