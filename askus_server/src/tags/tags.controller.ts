import { Controller, Get } from "@nestjs/common";
import { TagsService } from "./tags.service";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { TagResponse } from "@/shared/docs-responses/tag.response";

@Controller("tags")
export class TagsController {
    constructor(private readonly tagsService: TagsService) {}

    @Get()
    @ApiOperation({
        summary: "Get all tags",
        description: "Returns information about all the existing tags",
    })
    @ApiOkResponse({ description: "Tags returned", type: [TagResponse] })
    async getAllTags() {
        return await this.tagsService.getTags();
    }
}
