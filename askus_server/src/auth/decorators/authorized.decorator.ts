import { IUser } from "@/libs/common/types/user.type";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { type Request } from "express";

export const Authorized = createParamDecorator(
    (data: keyof IUser, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest() as Request;
        const user = request.user!;

        return data ? user[data] : user;
    }
);