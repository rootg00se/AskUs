import { ApiProperty } from "@nestjs/swagger";
import { RankDto } from "./rank.dto";

export class UserRanksDto {
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

    @ApiProperty({ type: RankDto })
    ranks: RankDto;
}
