import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetPopularPostsDto {
    @ApiPropertyOptional({
        description: "Limit of the posts",
        example: 5,
        type: Number,
    })
    @IsOptional()
    @IsInt({ message: "Posts limit must be an int number" })
    @Transform(({ value }) => Number.parseInt(value))
    limit: number;
}
