import { ApiProperty } from "@nestjs/swagger";
import { UserRanksDto } from "./user-rank.dto";

export class AnswerUserDto {
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

    @ApiProperty({ type: UserRanksDto })
    user_ranks: UserRanksDto;
}
