import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AnswersService } from "./answers.service";
import { UpdateAnswerDto } from "./dto/update-answer.dto";

@Controller("answers")
export class AnswersController {
    constructor(private readonly answersService: AnswersService) {}

    @Get(":id/replies")
    async getAnswerReplies(@Param("id") answerId: string) {
        return await this.answersService.getAnswerReplies(answerId);
    }

    @Post(":id/accept")
    async acceptAnswer(@Param("id") answerId: string) {
        await this.answersService.acceptAnswer(answerId);

        return {
            message: "Answer was accepted",
        };
    }

    @Put(":id")
    async updateAnswer(@Param("id") answerId: string, @Body() updateAnswerDto: UpdateAnswerDto) {
        return await this.answersService.updateAnswer(answerId, updateAnswerDto);
    }

    @Delete(":id")
    async deleteAnswer(@Param("id") answerId: string) {
        return await this.answersService.deleteAnswer(answerId);
    }
}
