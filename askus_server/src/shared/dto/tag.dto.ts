import { ApiProperty } from "@nestjs/swagger";

export class TagDto {
    @ApiProperty({
        description: "Url to the tag's badge",
        example: "http://example.com/badge.png",
        type: String,
    })
    badge_url: string;

    @ApiProperty({
        description: "Name of the tag",
        example: 100,
        type: Number,
    })
    tag: number;
}