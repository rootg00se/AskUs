import { ApiProperty } from "@nestjs/swagger";

export class TagResponse {
    @ApiProperty({
        description: "Id of an tag",
        example: "33ashjkuf34592fsKLe8f",
        type: String,
    })
    tag_id: string;

    @ApiProperty({
        description: "Name of the tag",
        example: "programming.",
        type: String,
    })
    tag: string;

    @ApiProperty({
        description: "Url to the tag's badge",
        example: "http://example.com/main.png",
        type: String,
    })
    badge_url: string;
}
