import { Body, Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { MessagesService } from '../../messages/service/messages.service'
import { json } from 'stream/consumers';
import { CommentsService } from '../service/comments.service';


@Controller('/wires/messages/comment')
// wires/messages/comment/${id} 

export class CommentsController {
    // constructor(private messagesService: MessagesService) { }
    constructor(private commentsService: CommentsService) { }

    @Get(':id')
    createComment(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: any
    ) {
        // return this.messagesService.update(id, {comments: [payload]})
        return this.commentsService.create(id, {comments: [payload]})
    }
}
