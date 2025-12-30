import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { GetAllAnswersDto } from "./dto/get-all-answers.dto";
import { CreateAnswerDto } from "./dto/create-answer.dto";
import { ANSWERS_INCLUDE, ANSWERS_OMIT } from "./utils/answers.constants";
import { IAnswer } from "./types/answer.type";
import { UpdateAnswerDto } from "./dto/update-answer.dto";

@Injectable()
export class AnswersService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAllPostAnswer(postId: string, getAllAnswersDto: GetAllAnswersDto) {
        const existingPost = await this.checkIfPostExists(postId);

        const limit = getAllAnswersDto.limit || 10;
        const answersToSkip = (getAllAnswersDto.page || 0) * limit;

        const postAnswers = await this.prismaService.answers.findMany({
            where: {
                post_id: existingPost.post_id,
            },
            orderBy: { created_at: "desc" },
            include: { ...ANSWERS_INCLUDE },
            ...ANSWERS_OMIT,
            skip: answersToSkip,
            take: limit,
        });

        return postAnswers.map(answer => this.transfromAnswerData(answer));
    }

    async createAnswer(
        postId: string,
        userId: string,
        createAnswerDto: CreateAnswerDto,
        parendId?: string,
    ) {
        const existingPost = await this.checkIfPostExists(postId);
        if (parendId) await this.checkIfAnswerExists(parendId);

        const createdAnswer = await this.prismaService.answers.create({
            data: {
                text: createAnswerDto.text,
                posts: { connect: { post_id: existingPost.post_id } },
                users: { connect: { user_id: userId } },
                ...(parendId && {
                    answers: {
                        connect: { answer_id: parendId },
                    },
                }),
            },
            include: { ...ANSWERS_INCLUDE },
            ...ANSWERS_OMIT,
        });

        return this.transfromAnswerData(createdAnswer);
    }

    async getAnswerReplies(answerId: string) {
        const existingAnswer = await this.checkIfAnswerExists(answerId);

        const replies = await this.prismaService.answers.findMany({
            where: {
                parent_id: existingAnswer.answer_id,
            },
            orderBy: { created_at: "asc" },
            include: { ...ANSWERS_INCLUDE },
            ...ANSWERS_OMIT,
        });

        return replies.map(answer => this.transfromAnswerData(answer));
    }

    async deleteAnswer(answerId: string) {
        const existingAnswer = await this.checkIfAnswerExists(answerId);

        const deletedAnswer = await this.prismaService.answers.delete({
            where: { answer_id: existingAnswer.answer_id },
            include: { ...ANSWERS_INCLUDE },
            ...ANSWERS_OMIT,
        });

        return this.transfromAnswerData(deletedAnswer);
    }

    async acceptAnswer(answerId: string) {
        const existingAnswer = await this.checkIfAnswerExists(answerId);

        await this.prismaService.closed_posts.create({
            data: {
                answer_id: existingAnswer.answer_id,
                post_id: existingAnswer.post_id,
            },
        });
    }

    async updateAnswer(answerId: string, updateAnswerDto: UpdateAnswerDto) {
        const existingAnswer = await this.checkIfAnswerExists(answerId);

        const updatedAnswer = await this.prismaService.answers.update({
            where: { answer_id: existingAnswer.answer_id },
            data: { text: updateAnswerDto.text },
            include: { ...ANSWERS_INCLUDE },
            ...ANSWERS_OMIT,
        });

        return this.transfromAnswerData(updatedAnswer);
    }

    private async checkIfPostExists(postId: string) {
        const existingPost = await this.prismaService.posts.findUnique({
            where: { post_id: postId },
        });

        if (!existingPost) throw new NotFoundException("Post with such id not found");

        return existingPost;
    }

    private async checkIfAnswerExists(answerId: string) {
        const existingAnswer = await this.prismaService.answers.findUnique({
            where: { answer_id: answerId },
        });

        if (!existingAnswer) throw new NotFoundException("Answer with such id not found");

        return existingAnswer;
    }

    private transfromAnswerData(answer: IAnswer) {
        const { closed_posts, _count, ...answerData } = answer;

        return {
            ...answerData,
            has_replies: _count.other_answers > 0,
            is_correct: closed_posts.length > 0,
        };
    }
}
