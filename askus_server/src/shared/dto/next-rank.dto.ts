import { ApiProperty } from "@nestjs/swagger";
import { RanksWithIdDto } from "./ranks-with-id.dto";

export class NextRankDto extends RanksWithIdDto {
    @ApiProperty({
        description: "Points left to user for a new rank",
        example: 150,
        type: Number
    })
    points_left: number;
}