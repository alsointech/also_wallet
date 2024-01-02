import { Injectable } from '@nestjs/common';

import { UserService } from 'src/user/service/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) { }

  async validateUser(email: string, password: string) {

    const user = await this.userService.findByEmail(email)

    const isMatch = await bcrypt.compare(password, user.password)


    if (user && isMatch) {

      return user

    }

    return null

  }
}
