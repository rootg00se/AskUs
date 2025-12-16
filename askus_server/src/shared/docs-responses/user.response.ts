import { ResponseDto } from "@/shared/dto/response.dto";
import { ApiProperty } from "@nestjs/swagger";
import { auth_method } from "@prisma/generated";
import { UserRanksDto } from "../dto/user-rank.dto";

class UserResponseDto {
    @ApiProperty({
        description: "Id of a user",
        example: "33ashjkuf34592fsKLe8f",
        type: String,
    })
    user_id: string;

    @ApiProperty({
        description: "Email of a user",
        example: "test@gmail.com",
        type: String,
    })
    email: string;

    @ApiProperty({
        description: "Display name of a user",
        example: "RootG00se",
        type: String,
    })
    display_name: string;

    @ApiProperty({
        description: "Url to the profile picture of a user",
        example: "http://domen.ru/image.png",
        type: String,
    })
    avatar_url: string | null;

    @ApiProperty({
        description: "Boolean value telling if user verified",
        example: false,
        type: Boolean,
    })
    is_verified: boolean;

    @ApiProperty({
        description: "Boolean value telling if 2fa enabled",
        example: false,
        type: Boolean,
    })
    is_two_factor_enabled: boolean;

    @ApiProperty({
        description: "Time when user was created",
        example: Date.now(),
        type: Date,
    })
    created_at: Date;

    @ApiProperty({
        description: "Authorization method that user uses",
        example: "credentials",
        type: String,
    })
    method: auth_method;

    @ApiProperty({
        description: "Phone nunber of a user",
        example: "79656077916",
        type: String,
    })
    phone: string | null;

    @ApiProperty({ type: UserRanksDto })
    user_ranks: UserRanksDto;
}

export class UserResponse extends ResponseDto {
    @ApiProperty({ type: UserResponseDto })
    data: UserResponseDto;
}
