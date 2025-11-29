import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '@/users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { SessionSerializer } from './utils/session.serializer';

@Module({
  imports: [
    PassportModule.register({ session: true }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
