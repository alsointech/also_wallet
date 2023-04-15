import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './messages.entity';


@Controller('/wires/messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) { }
  @Get('')
  getMessages(): any {
    return this.messagesService.findAll()
  }

  @Get(':id')
  getMessageById(@Param('id', ParseIntPipe) id: number) {   
    return this.messagesService.findOne(id)
  }

  @Post('')
  createMessage(@Body() payload: any) {
    return this.messagesService.create(payload)
  }


  /* @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  updateMessage(@Param('id') id: string, @Body() requestBody: any) {
    return {
      name: 'update message',
      // requestBody.enable : false
      requestBody
    }
  } */
  @Put(':id')
  updateMessage(@Param('id') id: number, @Body() payload: any) {
    return this.messagesService.update(id, payload)
  }

  @Patch(':id')
  deleteMessage(@Param('id') id: number) {
    return this.messagesService.delete(+id)
  }
}
