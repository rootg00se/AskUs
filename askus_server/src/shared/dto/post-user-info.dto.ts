import { ApiProperty } from "@nestjs/swagger";

export class PostUserInfoDto {
    @ApiProperty({
        description: "Display name of a user",
        example: "RootG00se",
        type: String,
    })
    displayName: string;

    @ApiProperty({
        description: "Url to the profile picture of a user",
        example: "http://domen.ru/image.png",
        type: String,
    })
    avatar_url: string;
}
