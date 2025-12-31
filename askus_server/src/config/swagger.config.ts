import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = () => {
    const swaggerOptions = new DocumentBuilder()
        .setTitle("AskUs API")
        .setDescription("API documentation for ask us web-app")
        .setVersion("1.0.0")
        .setContact("RootG00se", "http://localhost:5137", "gorc141408@gmail.com")
        .addCookieAuth("session")
        .build();

    return swaggerOptions;
};
