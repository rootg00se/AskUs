import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    Logger,
    UnauthorizedException,
} from "@nestjs/common";
import { Response } from "express";
import { appendFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";

@Catch()
export class GlobalFilter implements ExceptionFilter {
    private readonly logger = new Logger(GlobalFilter.name);
    private readonly logFile = join(__dirname, "../../../../logs/exceptions.log");

    private writeToFile(error: string) {
        const logDir = dirname(this.logFile);

        if (!existsSync(logDir)) {
            mkdirSync(logDir, { recursive: true });
        }

        appendFileSync(this.logFile, error);
    }

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse() as Response;

        if (exception.status === 401 || exception.getStatus() === 401) {
            this.logger.error(exception.message);

            return response.status(401).json({
                status: exception.getStatus(),
                error: exception.message,
                timestamp: new Date().toISOString(),
                path: ctx.getRequest().url,
                message: (exception.getResponse() as any).message,
            });
        }

        const status = exception instanceof HttpException ? exception.getStatus() : 500;

        const error =
            exception instanceof HttpException ? exception.message : "Internal server error";

        const message =
            exception instanceof HttpException
                ? (exception.getResponse() as any).message
                : ["Something went wrong. Try again later."];

        this.logger.error(error);

        if ((exception as Error).stack !== undefined && status === 500) {
            this.writeToFile(`${(exception as Error).stack!}\n`);
        }

        response.status(status).json({
            status,
            error,
            timestamp: new Date().toISOString(),
            path: ctx.getRequest().url,
            message: message,
        });
    }
}
