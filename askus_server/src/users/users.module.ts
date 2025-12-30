import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { S3StorageModule } from '@/libs/s3-storage/s3-storage.module';
import { RanksModule } from '@/ranks/ranks.module';

@Module({
  imports: [S3StorageModule, RanksModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
