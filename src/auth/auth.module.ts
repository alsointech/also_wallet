import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from 'src/user/user.module';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './controller/auth.controller';
import { ConfigType } from '@nestjs/config';
import config from '../config';


@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {

        const secret = configService.jwtSecret

        return {

          secret,

          signOptions: {

            expiresIn: '24h'

          }
        }
      }
    })
  ],

  providers: [AuthService, LocalStrategy],

  controllers: [AuthController]

})

export class AuthModule { }
