import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from 'src/user/service/user.service';
import { User } from 'src/user/entities/user.entity';
import { IAuthToken } from '../models/token.model';


@Injectable()
export class AuthService {

  constructor(

    private userService: UserService,

    private jwtService: JwtService
    
  ) { }

  async validateUser(email: string, password: string) {

    const user = await this.userService.findByEmail(email)

    if (user) {

      const isMatch = await bcrypt.compare(password, user.password)

      if (isMatch) {

        const { password, ...userValidated } = user

        return userValidated

      }
    }

    return null

  }

  generateJWT(user: User) {

    const payload: IAuthToken = { role: user.role, sub: user.id }

    return {

      access_token: this.jwtService.sign(payload),

      user

    }
  }
}
