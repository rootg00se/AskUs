import { ResponseDto } from "@/shared/dto/response.dto";
import { ApiProperty } from "@nestjs/swagger";

class AnswerResponseDto {
    @ApiProperty({
        description: "Id of an answer",
        example: "33ashjkuf34592fsKLe8f",
        type: String,
    })
    answer_id: string;

    @ApiProperty({
        description: "Text of an answer",
        example: "This is my answer.",
        type: String,
    })
    text: string;

    @ApiProperty({
        description: "Flag that tells if answer correct",
        example: false,
        type: Boolean,
    })
    is_correct: boolean;

    @ApiProperty({
        description: "Id of the post to which the answer belongs",
        example: "33ashjkuf34592fsKLe8f",
        type: String,
    })
    post_id: string;

    @ApiProperty({
        description: "Time when answer was created",
        example: Date.now(),
        type: Date,
    })
    create_at: Date;
}

export class AnswerResponse extends ResponseDto {
    @ApiProperty({ type: AnswerResponseDto })
    data: AnswerResponseDto;
}

export class AnswersArrayResponse extends ResponseDto {
    @ApiProperty({ type: [AnswerResponseDto] })
    data: AnswerResponseDto[];
}
