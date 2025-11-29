import { IUser } from "./libs/common/types/user.type";
import { Request } from "express";

declare module "express" {
    interface Request {
        user?: IUser
    }
}