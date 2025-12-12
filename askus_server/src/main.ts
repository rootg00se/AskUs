import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { AppModule } from "./app.module";
import cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";
import { CustomLogger } from "./libs/common/logger/logger.service";
import { GlobalFilter } from "./libs/common/filters/global.filter";
import { GlobalInterceptor } from "./libs/common/interceptors/global.interceptor";
import { createClient, RedisClientType } from "redis";
import session from "express-session";
import passport from "passport";
import { sessionConfig } from "./config/session.config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService);

    const redis: RedisClientType = createClient({ url: config.getOrThrow<string>("REDIS_URI") });
    await redis.connect();

    app.setGlobalPrefix("api/v1");

    const swaggerConfig = new DocumentBuilder()
        .setTitle("AskUs API")
        .setDescription("API documentation for ask us web-app")
        .setVersion("1.0.0")
        .setContact("RootG00se", "http://localhost:5137", "gorc141408@gmail.com")
        .addCookieAuth("session")
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup("api/docs", app, document, {
        jsonDocumentUrl: "/swagger.json",
        yamlDocumentUrl: "/swagger.yaml",
        customSiteTitle: "AskUs API Docs",
    });

    app.use(cookieParser(config.getOrThrow<string>("COOKIES_SECRET")));
    app.useLogger(new CustomLogger());
    app.useGlobalInterceptors(new GlobalInterceptor());

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
        credentails: true,
        exposedHeaders: ["set-cookie"],
    });

    await app.listen(config.getOrThrow<string>("APPLICATION_PORT"));
}

bootstrap();
