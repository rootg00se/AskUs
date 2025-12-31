import { ApiProperty } from "@nestjs/swagger";
import { RankDto } from "./rank.dto";

export class RanksWithIdDto extends RankDto {
    @ApiProperty({
        description: "Id of an rank",
        example: "abc-dfe-cde",
        type: String
    })
    rank_id: string;
}