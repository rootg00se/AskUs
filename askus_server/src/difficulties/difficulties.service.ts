import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DifficultiesService {
    constructor(private readonly prismaService: PrismaService) {}

    public async getDifficulties() {
        return await this.prismaService.post_difficulties.findMany({ orderBy: { reward: "asc" } });
    }
}
