import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC } from '../../decorators/is-public/is-public.decorator';
import config from '../../../config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {

	constructor(
		private reflector: Reflector,
		@Inject(config.KEY) private configService: ConfigType<typeof config>
	) { }

	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

		// no token needed if public
		const isPublic = this.reflector.get(IS_PUBLIC, context.getHandler())

		if (isPublic) {

			return true

		}

		const request = context.switchToHttp().getRequest<Request>();

		const authHeader = request.header('Authorization');

		const isAuth = authHeader === this.configService.apiKey;

		if (!isAuth) {

			throw new UnauthorizedException('not allowed');

		}

		return true;

	}
}
