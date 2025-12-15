import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { S3StorageModule } from '@/libs/s3-storage/s3-storage.module';

@Module({
  imports: [S3StorageModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
