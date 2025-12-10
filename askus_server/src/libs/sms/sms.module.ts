import { Module } from "@nestjs/common";
import { SmsService } from "./sms.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule.register({})],
    providers: [SmsService],
    exports: [SmsService],
})
export class SmsModule {}
