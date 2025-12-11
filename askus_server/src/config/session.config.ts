import { ms, StringValue } from "@/libs/common/utils/ms.util";
import { ConfigService } from "@nestjs/config";
import { RedisStore } from "connect-redis";
import { SessionOptions } from "express-session";
import { RedisClientType } from "redis";

export const sessionConfig = (configService: ConfigService, redis: RedisClientType): SessionOptions => ({
    secret: configService.getOrThrow<string>("SESSION_SECRET"),
    name: configService.getOrThrow<string>("SESSION_NAME"),
    resave: true,
    saveUninitialized: false,
    cookie: {
        domain: configService.getOrThrow<string>("SESSION_DOMAIN"),
        maxAge: ms(configService.getOrThrow<StringValue>("SESSION_MAX_AGE")),
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    },
    store: new RedisStore({
        client: redis,
        prefix: configService.getOrThrow<string>("SESSION_FOLDER"),
    }),
});
