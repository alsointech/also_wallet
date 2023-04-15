import { Module } from '@nestjs/common';
import { MessagesModule } from '../messages/messages.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [],
})
export class CommonModule {}
