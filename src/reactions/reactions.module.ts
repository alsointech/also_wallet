import { Module } from '@nestjs/common';
import { MessagesModule } from 'src/messages/messages.module';
import { ReactionsController } from './controller/reactions.controller';
import { ReactionsService } from './service/reactions.service';

@Module({
  controllers: [ReactionsController],
  providers: [ReactionsService],
  imports: [MessagesModule]
})
export class CommentsModule {}
