import { Module } from '@nestjs/common';
import { PasswordService } from './password.service';
import { PasswordController } from './password.controller';
import { UsersModule } from '@/users/users.module';
import { MailModule } from '@/libs/mail/mail.module';

@Module({
  imports: [UsersModule, MailModule],
  controllers: [PasswordController],
  providers: [PasswordService],
})
export class PasswordModule {}
