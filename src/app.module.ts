import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [MessagesModule, AuthModule, CommonModule, CommentsModule],
  // controllers: [CommonController],
  // providers: [],
})
export class AppModule {}