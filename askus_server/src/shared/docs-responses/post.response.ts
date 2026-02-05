import { ApiProperty } from "@nestjs/swagger";
import { PostDifficultyDto } from "../dto/post-difficulty.dto";
import { PostUserInfoDto } from "../dto/post-user-info.dto";
import { TagDto } from "../dto/tag.dto";

export class PostResponse {
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

    @ApiProperty({ type: [TagDto] })
    tags: TagDto[];

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
    users: PostUserInfoDto;
}

export class PostResponseWithLike extends PostResponse {
    @ApiProperty({
        description: "Flag that shows if user liked this post",
        example: true,
        type: Boolean,
    })
    isLiked: boolean;
}

export class PostPaginationResponse {
    @ApiProperty({ type: [PostResponseWithLike] })
    items: PostResponseWithLike[];

    @ApiProperty({
        description: "Total count of pages",
        example: 0,
        type: Number,
    })
    total_page: number;

    @ApiProperty({
        description: "Flag whitch tells if there is another page",
        example: true,
        type: Boolean,
    })
    has_next_page: number;

    @ApiProperty({
        description: "Current page",
        example: 0,
        type: Number,
    })
    page: number;

    @ApiProperty({
        description: "Total of posts",
        example: 0,
        type: Number,
    })
    total: number;

    @ApiProperty({
        description: "Limit for the page",
        example: 0,
        type: Number,
    })
    page_limit: number;
}