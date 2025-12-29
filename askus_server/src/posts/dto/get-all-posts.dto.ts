import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetAllPostsDto {
    @ApiPropertyOptional({
        description: "Current page of posts",
        example: 0,
        type: Number,
    })
    @IsOptional()
    @IsInt({ message: "Current page must be an int number" })
    @Transform(({ value }) => Number.parseInt(value))
    page?: number;

    @ApiPropertyOptional({
        description: "Limit of the posts",
        example: 5,
        type: Number,
    })
    @IsOptional()
    @IsInt({ message: "Page limit must be an int number" })
    @Transform(({ value }) => Number.parseInt(value))
    pageLimit?: number;

    @ApiPropertyOptional({
        description: "Tags for posts filtering",
        example: "programming,cooking",
        type: String,
    })
    @IsOptional()
    tags?: string;

    @ApiPropertyOptional({
        description: "Difficulties for posts filtering",
        example: "hard,easy",
        type: String,
    })
    @IsOptional()
    difficulty?: string;

    @ApiPropertyOptional({
        description: "Text for posts searching",
        example: "some text",
        type: String,
    })
    @IsOptional()
    query?: string;
}
