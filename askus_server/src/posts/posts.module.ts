import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { S3StorageModule } from '@/libs/s3-storage/s3-storage.module';
import { AnswersModule } from '@/answers/answers.module';

@Module({
  imports: [S3StorageModule, AnswersModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
