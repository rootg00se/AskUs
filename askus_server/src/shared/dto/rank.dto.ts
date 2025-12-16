import { ApiProperty } from "@nestjs/swagger";

export class RankDto {
    @ApiProperty({
        description: "Name of a rank",
        example: "newbie",
        type: String,
    })
    name: string;

    @ApiProperty({
        description: "Url to the rank's badge",
        example: "http://example.com/badge.png",
        type: String,
    })
    badge_url: string;
}