import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { provider_type } from "@prisma/generated";

export function OAuth2Guard(provider: provider_type) {
    @Injectable()
    class OAuth2GuardMixin extends AuthGuard(provider) {
        async canActivate(context: ExecutionContext) {
            const activate = (await super.canActivate(context)) as boolean;
            const request = context.switchToHttp().getRequest();

            await super.logIn(request);

            return activate;
        }
    }

    return OAuth2GuardMixin;
}
