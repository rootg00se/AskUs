import { Module } from '@nestjs/common';
import { RanksService } from './ranks.service';
import { RanksController } from './ranks.controller';

@Module({
  controllers: [RanksController],
  providers: [RanksService],
  exports: [RanksService]
})
export class RanksModule {}
