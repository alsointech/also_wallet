import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put} from '@nestjs/common';
import { MessagesService } from '../service/messages.service';
import { CreateMessageDto, UpdateMessageDto } from '../dto/messages.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('messages')
@Controller('/wires/messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) { }
  @Get('')
  @ApiOperation({ summary: 'list all messages'})
  getMessages(): any {
    return this.messagesService.findAll()
  }

  @Get(':id')
  getMessageById(@Param('id', ParseIntPipe) id: number) {   
    return this.messagesService.findOne(id)
  }

  @Post('')
  createMessage(@Body() payload: CreateMessageDto) {
    return this.messagesService.create(payload)
  }

  @Put(':id')
  updateMessage(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateMessageDto) {
    return this.messagesService.update(id, payload)
  }

  @Patch(':id')
  deleteMessage(@Param('id', ParseIntPipe) id: number) {
    return this.messagesService.delete(id)
  }
}
