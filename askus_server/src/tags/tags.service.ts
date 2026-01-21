import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TagsService {
    constructor(private readonly prismaService: PrismaService) {}

    public async getTags() {
        return await this.prismaService.tags.findMany({ orderBy: { tag_id: "asc" } });
    }
}
