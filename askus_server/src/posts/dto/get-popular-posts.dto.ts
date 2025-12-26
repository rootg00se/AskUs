import { Transform } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetPopularPostsDto {
    @IsOptional()
    @IsInt({ message: "Posts limit must be an int number" })
    @Transform(({ value }) => Number.parseInt(value))
    limit: number;
}
