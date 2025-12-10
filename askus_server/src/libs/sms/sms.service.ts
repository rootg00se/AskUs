import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom } from "rxjs";

@Injectable()
export class SmsService {
    private API_URL: string;
    private API_SENDER: string;
    private API_ID: string;

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService,
    ) {
        this.API_ID = this.configService.getOrThrow<string>("SMS_API_ID");
        this.API_SENDER = this.configService.getOrThrow<string>("SMS_API_SENDER");
        this.API_URL = this.configService.getOrThrow<string>("SMS_API_URL");
    }

    public async sendSMS(to: string, text: string) {
        const params = {
            api_id: this.API_ID,
            to,
            msg: text,
            json: 1,
            from: this.API_SENDER,
        };

        try {
            const response = this.httpService.get(this.API_URL, { params });
            const data = (await firstValueFrom(response)).data;

            return data;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
