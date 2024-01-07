import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES } from 'src/auth/decorators/is-admin/is-admin.decorator';
import { Role } from 'src/auth/models/roles.models';
import { IAuthToken } from 'src/auth/models/token.model';

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private reflector: Reflector) { }

    canActivate(

        context: ExecutionContext,

    ): boolean | Promise<boolean> | Observable<boolean> {

        // get the array of possible roles
        const roles = this.reflector.get<Role[]>(ROLES, context.getHandler())

        // to obtain the req inside a guard
        const request = context.switchToHttp().getRequest()

        const user = request.user as IAuthToken

        const isAuth = roles.some(role => role === user.role)

        if (!isAuth) {

            throw new UnauthorizedException('not allowed role')
            
        }

        return isAuth;
    }
}
