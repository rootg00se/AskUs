import { ApiProperty } from "@nestjs/swagger";
import { RankDto } from "../dto/rank.dto";

export class RanksResponse extends RankDto {
    @ApiProperty({
        description: "Id of an rank",
        example: "abc-dfe-cde",
        type: String,
    })
    rank_id: string;
}
