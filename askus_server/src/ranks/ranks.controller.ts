import { Controller, Get } from "@nestjs/common";
import { RanksService } from "./ranks.service";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { RanksResponse } from "@/shared/docs-responses/ranks.response";

@Controller("ranks")
export class RanksController {
    constructor(private readonly ranksService: RanksService) {}

    @Get()
    @ApiOperation({
        summary: "Get all ranks",
        description: "Returns information about all the existing ranks",
    })
    @ApiOkResponse({ description: "Ranks returned", type: RanksResponse })
    async getAllRanks() {
        return await this.ranksService.getAllRanks();
    }
}
