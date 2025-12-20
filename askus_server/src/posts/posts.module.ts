import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { S3StorageModule } from '@/libs/s3-storage/s3-storage.module';

@Module({
  imports: [S3StorageModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
