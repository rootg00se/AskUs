import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AnswersService } from "./answers.service";
import { UpdateAnswerDto } from "./dto/update-answer.dto";
import { AuthenticatedGuard } from "@/auth/guards/authenticated.guard";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { AnswerResponse, AnswersArrayResponse } from "@/shared/docs-responses/answer.response";

@Controller("answers")
export class AnswersController {
    constructor(private readonly answersService: AnswersService) {}

    @Get(":id/replies")
    @ApiOperation({
        summary: "Get all replies of the answer",
        description: "Returns all replies of the answer",
    })
    @ApiOkResponse({ description: "Answers returned", type: AnswersArrayResponse })
    async getAnswerReplies(@Param("id") answerId: string) {
        return await this.answersService.getAnswerReplies(answerId);
    }

    @Post(":id/accept")
    @ApiOperation({
        summary: "Accept answer",
        description: "Marks answer as correct and post as closed",
    })
    @ApiOkResponse({ description: "Answer accepted" })
    @UseGuards(AuthenticatedGuard)
    async acceptAnswer(@Param("id") answerId: string) {
        await this.answersService.acceptAnswer(answerId);

        return {
            message: "Answer was accepted",
        };
    }

    @Put(":id")
    @ApiOperation({
        summary: "Update answer",
        description: "Updates answer's text and returns it",
    })
    @ApiOkResponse({ description: "Answer updates", type: AnswerResponse })
    @UseGuards(AuthenticatedGuard)
    async updateAnswer(@Param("id") answerId: string, @Body() updateAnswerDto: UpdateAnswerDto) {
        return await this.answersService.updateAnswer(answerId, updateAnswerDto);
    }

    @Delete(":id")
    @ApiOperation({
        summary: "Delete answer",
        description: "Deletes answer and returns it",
    })
    @ApiOkResponse({ description: "Answer deleted", type: AnswerResponse })
    @UseGuards(AuthenticatedGuard)
    async deleteAnswer(@Param("id") answerId: string) {
        return await this.answersService.deleteAnswer(answerId);
    }
}
