// dependencies 
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// modules
import { CommonModule } from './common/common.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { environments } from './environments';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true
    }),
    MessagesModule,
    AuthModule,
    CommonModule,
    CommentsModule
  ],
  // controllers: [CommonController],
  // providers: [],
})
export class AppModule { }