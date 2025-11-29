import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { IS_DEV } from "./libs/common/utils/is-dev.util";
import { PrismaModule } from './prisma/prisma.module';
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            ignoreEnvFile: !IS_DEV,
            isGlobal: true,
        }),
        PrismaModule,
        UsersModule,
        AuthModule
    ],
})

export class AppModule {}