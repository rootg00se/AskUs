import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { AppModule } from "./app.module";
import cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";
import { CustomLogger } from "./libs/common/logger/logger.service";
import { GlobalFilter } from "./libs/common/filters/global.filter";
import { createClient, RedisClientType } from "redis";
import session from "express-session";
import passport from "passport";
import { sessionConfig } from "./config/session.config";
import { SwaggerModule } from "@nestjs/swagger";
import { swaggerConfig } from "./config/swagger.config";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService);

    const redis: RedisClientType = createClient({ url: config.getOrThrow<string>("REDIS_URI") });
    await redis.connect();

    app.setGlobalPrefix("api/v1");

    const swaggerOptions = swaggerConfig();
    const document = SwaggerModule.createDocument(app, swaggerOptions);

    SwaggerModule.setup("api/docs", app, document, {
        jsonDocumentUrl: "/swagger.json",
        yamlDocumentUrl: "/swagger.yaml",
        customSiteTitle: "AskUs API Docs",
    });

    app.use(cookieParser(config.getOrThrow<string>("COOKIES_SECRET")));
    app.useLogger(new CustomLogger());

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );

    app.use(session(sessionConfig(config, redis)));

    app.use(passport.initialize());
    app.use(passport.session());

    app.useGlobalFilters(new GlobalFilter());

    app.enableCors({
        origin: config.getOrThrow<string>("CLIENT_ORIGIN"),
        credentials: true,
        exposedHeaders: ["set-cookie"],
    });

    await app.listen(config.getOrThrow<string>("APPLICATION_PORT"));
}

bootstrap();
