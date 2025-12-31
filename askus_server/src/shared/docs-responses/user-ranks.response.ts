import { ApiProperty } from "@nestjs/swagger";
import { NextRankDto } from "../dto/next-rank.dto";
import { RanksWithIdDto } from "../dto/ranks-with-id.dto";
import { ResponseDto } from "../dto/response.dto";

class UserRankInfoDto extends RanksWithIdDto {
    @ApiProperty({ type: NextRankDto })
    next_rank: NextRankDto;
}

class UserRanksResponseDto {
    @ApiProperty({
        description: "Id of an user rank id",
        example: "abc-dfe-rkt",
        type: String,
    })
    user_rank_id: string;

    @ApiProperty({
        description: "Points of a user",
        example: 12,
        type: Number,
    })
    points: number;

    @ApiProperty({
        description: "Date when rank was updated",
        example: Date.now(),
        type: String,
    })
    updated_at: Date;

    @ApiProperty({ type: UserRankInfoDto })
    ranks: UserRankInfoDto;
}

export class UserRanksResponse extends ResponseDto {
    @ApiProperty({ type: UserRanksResponseDto })
    data: UserRanksResponseDto;
}