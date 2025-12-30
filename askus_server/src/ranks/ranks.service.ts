import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class RanksService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAllRanks() {
        const ranks = await this.prismaService.ranks.findMany({
            orderBy: { required_points: "asc" },
        });

        return ranks;
    }

    async getFullUserRankInformation(userId: string) {
        const existingUser = await this.prismaService.users.findUnique({
            where: { user_id: userId },
        });

        if (!existingUser) throw new NotFoundException("User with such id not found");

        const userRanks = await this.prismaService.user_ranks.findUnique({
            where: { user_id: existingUser.user_id },
            include: { ranks: { omit: { rank_id: true } } },
            omit: { user_id: true, rank_id: true },
        });

        if (!userRanks) throw new NotFoundException("Couln't find user rank information");

        const nextRank = await this.prismaService.ranks.findFirst({
            where: {
                required_points: {
                    gt: userRanks.points,
                },
            },
            orderBy: { required_points: "asc" },
        });

        return {
            ...userRanks,
            ranks: {
                ...userRanks.ranks,
                next_rank: {
                    ...nextRank,
                    points_left: nextRank ? nextRank.required_points - userRanks.points : 0,
                },
            },
        };
    }
}
