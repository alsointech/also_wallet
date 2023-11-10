// dependencies 
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

// modules
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { environments } from './environments';
import config from './config';
import { DatabaseModule } from './database/database.module';
import { InvestmentModule } from './investment/investment.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      // validations on env variables types and exists
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_URL: Joi.string().required(),
        /* DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_HOST: Joi.string().hostname().required(), */
      })
    }),
    AuthModule,
    CommonModule,
    DatabaseModule,
    InvestmentModule,
    UserModule,
  ],
})
export class AppModule { }