import { Body, Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { MessagesService } from '../../messages/service/messages.service'
import { json } from 'stream/consumers';


@Controller('/wires/messages/comment')
// wires/messages/comment/${id} 

export class CommentsController {
    constructor(private messagesService: MessagesService) { }

    @Get(':id')
    createComment(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: any
    ) {
        console.log('payload: ' + JSON.stringify(payload, undefined, 4  ));
        return this.messagesService.update(id, {comments: [payload]})
    }
}
