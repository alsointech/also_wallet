import { Module } from '@nestjs/common';
import { CommentsController } from './controller/comments.controller';
import { CommentsService } from './service/comments.service';
import { MessagesService } from 'src/messages/service/messages.service';
import { MessagesModule } from 'src/messages/messages.module';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [MessagesModule]
})
export class CommentsModule {}
