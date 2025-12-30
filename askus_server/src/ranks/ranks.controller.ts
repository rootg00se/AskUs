import { Controller, Get } from "@nestjs/common";
import { RanksService } from "./ranks.service";

@Controller("ranks")
export class RanksController {
    constructor(private readonly ranksService: RanksService) {}

    @Get()
    async getAllRanks() {
        return await this.ranksService.getAllRanks();
    }
}
