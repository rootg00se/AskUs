import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GitHubAuthGuard extends AuthGuard("github") {
    async canActivate(context: ExecutionContext) {
        const activate = await super.canActivate(context) as boolean;
        const request = await context.switchToHttp().getRequest();

        await super.logIn(request);

        return activate;
    }
}