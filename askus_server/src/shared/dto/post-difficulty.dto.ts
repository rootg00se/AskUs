import { ApiProperty } from "@nestjs/swagger";

export class PostDifficultyDto {
    @ApiProperty({
        description: "Id of a post difficulty",
        example: "33ashjkuf34592fsKLe8f",
        type: String,
    })
    post_difficulty_id: string;

    @ApiProperty({
        description: "Difficulty of a post",
        example: "grandmaster",
        type: String,
    })
    difficulty: string;

    @ApiProperty({
        description: "Reward for correct answer",
        example: 200,
        type: Number,
    })
    reward: number;
}
