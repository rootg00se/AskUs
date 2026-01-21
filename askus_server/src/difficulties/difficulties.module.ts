import { Module } from '@nestjs/common';
import { DifficultiesService } from './difficulties.service';
import { DifficultiesController } from './difficulties.controller';

@Module({
  controllers: [DifficultiesController],
  providers: [DifficultiesService],
})
export class DifficultiesModule {}
