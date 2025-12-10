import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalGuard extends AuthGuard("local") {
    async canActivate(context: ExecutionContext) {
        const activate = await super.canActivate(context) as boolean;

        return activate;
    }
}