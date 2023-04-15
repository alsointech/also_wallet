import { Module } from '@nestjs/common';
import { MessagesController } from './controller/messages.controller';
import { MessagesService } from './service/messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService]
})
export class MessagesModule {}
