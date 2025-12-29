import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({
        type: "string",
        format: "binary",
        description: "Post data md file",
    })
    avatar: any;
}
