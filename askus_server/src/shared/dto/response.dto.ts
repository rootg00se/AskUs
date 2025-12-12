import { ApiProperty } from "@nestjs/swagger";

export class ResponseDto {
    @ApiProperty({
        description: "Statis of request",
        example: true,
        type: Boolean,
    })
    success: boolean;

    @ApiProperty({
        description: "Status of request",
        example: 201,
        type: Number,
    })
    status: number;

    @ApiProperty({
        description: "Time when request was completed",
        example: "33ashjkuf34592fsKLe8f",
        type: String,
    })
    timestamp: string;

    @ApiProperty({
        description: "Id of a user",
        example: Date.now(),
        type: Date,
    })
    path: string;
}
