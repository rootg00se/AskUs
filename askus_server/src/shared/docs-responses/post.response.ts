import { ResponseDto } from "@/shared/dto/response.dto";
import { ApiProperty } from "@nestjs/swagger";
import { PostDifficultyDto } from "../dto/post-difficulty.dto";
import { PostUserInfoDto } from "../dto/post-user-info.dto";

class PostResponseDto {
    @ApiProperty({
        description: "Id of a post",
        example: "33ashjkuf34592fsKLe8f",
        type: String,
    })
    post_id: string;

    @ApiProperty({
        description: "Key to the post data file",
        example: "posts/test.md",
        type: String,
    })
    data_key: string;

    @ApiProperty({
        description: "Url to the data of a post",
        example: "http://example.com/data.md",
        type: String,
    })
    data_url: string;

    @ApiProperty({
        description: "Title of the post",
        example: "Example post",
        type: String,
    })
    title: string;

    @ApiProperty({
        description: "Description of the post",
        example: "This is example post.",
        type: String,
    })
    description: string;

    @ApiProperty({
        description: "Flag that tells if post closed",
        example: true,
        type: Boolean,
    })
    is_closed: boolean;

    @ApiProperty({
        description: "Count of post likes",
        example: 20,
        type: Number,
    })
    likes: number;

    @ApiProperty({
        description: "All tags of the post",
        example: ["books", "education"],
        type: [String],
    })
    tags: string[];

    @ApiProperty({
        description: "Time when post was created",
        example: Date.now(),
        type: Date,
    })
    created_at: Date;

    @ApiProperty({
        description: "Time when post was updated",
        example: Date.now(),
        type: Date,
    })
    updated_at: Date;

    @ApiProperty({ type: PostDifficultyDto })
    post_difficulties: PostDifficultyDto;

    @ApiProperty({ type: PostUserInfoDto })
    users: PostDifficultyDto;
}

class PostResponseWithLikeDto extends PostResponseDto {
    @ApiProperty({
        description: "Flag that shows if user liked this post",
        example: true,
        type: Boolean,
    })
    isLiked: boolean;
}

export class PostResponseWithLike extends ResponseDto {
    @ApiProperty({ type: PostResponseWithLikeDto })
    data: PostResponseWithLikeDto;
}

export class PostResponse extends ResponseDto {
    @ApiProperty({ type: PostResponseDto })
    data: PostResponseDto;
}

export class PostsArrayResponse extends ResponseDto {
    @ApiProperty({ type: [PostResponseDto] })
    data: PostResponseDto[];
}

export class PostsArrayWithLikeResponse extends ResponseDto {
    @ApiProperty({ type: [PostResponseWithLikeDto] })
    data: PostResponseWithLikeDto[];
}
