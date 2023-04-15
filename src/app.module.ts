import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MessagesModule, AuthModule, CommonModule],
  // controllers: [CommonController],
  // providers: [],
})
export class AppModule {}