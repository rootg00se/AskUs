import { ApiProperty } from "@nestjs/swagger";

export class UpdateAvatarDto {
    @ApiProperty({
        type: "string",
        format: "binary",
        description: "Avatar image file",
    })
    avatar: any;
}
