import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { IS_PUBLIC } from 'src/auth/decorators/is-public/is-public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    constructor(private reflector: Reflector) {
        super()
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        // validate if endpoint is public with jwt guard
		const isPublic = this.reflector.get(IS_PUBLIC, context.getHandler())

		if (isPublic) {

			return true

		}

        return super.canActivate(context)

    }
}
