import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { ConfigType } from "@nestjs/config";

import config from '../../config';
import { IAuthToken } from "../models/token.model";


/**
 * this is to validate the request
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>) {

        super({

            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

            ignoreExpiration: false,

            secretOrKey: configService.jwtSecret

        })
    }

    validate(payload: IAuthToken) {

        return payload

    }
}
