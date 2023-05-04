// dependencies 
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

// modules
import { CommonModule } from './common/common.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { environments } from './environments';
import config from './config';
import { ReactionsModule } from './reactions/reactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      // validations on env variables types and exists
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required()
      })
    }),
    MessagesModule,
    AuthModule,
    CommonModule,
    CommentsModule,
    ReactionsModule
  ],
})
export class AppModule { }