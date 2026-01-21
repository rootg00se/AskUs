import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { IS_DEV } from "./libs/common/utils/is-dev.util";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { SmsModule } from "./libs/sms/sms.module";
import { S3StorageModule } from "./libs/s3-storage/s3-storage.module";
import { PostsModule } from "./posts/posts.module";
import { CacheModule } from "@nestjs/cache-manager";
import { keyvRedisConfig } from "./config/keyv-redis.config";
import { AnswersModule } from './answers/answers.module';
import { RanksModule } from './ranks/ranks.module';
import { TagsModule } from './tags/tags.module';
import { DifficultiesModule } from './difficulties/difficulties.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            ignoreEnvFile: !IS_DEV,
            isGlobal: true,
        }),
        PrismaModule,
        AuthModule,
        UsersModule,
        SmsModule,
        S3StorageModule,
        PostsModule,
        CacheModule.registerAsync({
            isGlobal: true,
            imports: [ConfigModule],
            useFactory: keyvRedisConfig,
            inject: [ConfigService],
        }),
        AnswersModule,
        RanksModule,
        TagsModule,
        DifficultiesModule,
    ],
})
export class AppModule {}
