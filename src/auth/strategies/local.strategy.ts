import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../service/auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {

  constructor(private authService: AuthService) {

    // inherited fields and customized name
    super({

      usernameField: 'email',
      // passwordField: 'password'

    })
  }

  async validate(email: string, password: string) {

    const user = await this.authService.validateUser(email, password)

    if (!user) {

      throw new UnauthorizedException('User not allowed')

    }

    return user

  }

}
