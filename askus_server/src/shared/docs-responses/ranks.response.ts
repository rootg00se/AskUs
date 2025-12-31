import { ApiProperty } from "@nestjs/swagger";
import { ResponseDto } from "../dto/response.dto";
import { RanksWithIdDto } from "../dto/ranks-with-id.dto";

export class RanksResponse extends ResponseDto {
    @ApiProperty({ type: [RanksWithIdDto] })
    data: RanksWithIdDto[];
}