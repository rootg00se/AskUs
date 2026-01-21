import { Controller, Get } from "@nestjs/common";
import { DifficultiesService } from "./difficulties.service";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { DifficultyResponse } from "@/shared/docs-responses/difficulty.response";

@Controller("difficulties")
export class DifficultiesController {
    constructor(private readonly difficultiesService: DifficultiesService) {}

    @Get()
    @ApiOperation({
        summary: "Get all difficulties",
        description: "Returns information about all the existing difficulties",
    })
    @ApiOkResponse({ description: "Difficulties returned", type: [DifficultyResponse] })
    async getAllDifficulties() {
        return await this.difficultiesService.getDifficulties();
    }
}
