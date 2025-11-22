import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { IS_DEV } from "./libs/common/utils/is-dev.util";
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            ignoreEnvFile: !IS_DEV,
            isGlobal: true,
        }),
        PrismaModule,
    ],
})

export class AppModule {}
