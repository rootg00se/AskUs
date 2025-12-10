import { Module } from '@nestjs/common';
import { TwoFactorAuthService } from './two-factor-auth.service';
import { TwoFactorAuthController } from './two-factor-auth.controller';
import { SmsModule } from '@/libs/sms/sms.module';
import { UsersModule } from '@/users/users.module';

@Module({
  imports: [SmsModule, UsersModule],
  controllers: [TwoFactorAuthController],
  providers: [TwoFactorAuthService],
  exports: [TwoFactorAuthService]
})
export class TwoFactorAuthModule {}
