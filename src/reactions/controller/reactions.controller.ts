import { Body, Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { MessagesService } from '../../messages/service/messages.service'
import { json } from 'stream/consumers';
import { ReactionsService } from '../service/reactions.service';


@Controller('/wires/messages/reaction')
// wires/messages/comment/${id} 

export class ReactionsController {
    constructor(private reactionsService: ReactionsService) { }

    @Get(':id')
    createComment(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: any
    ) {
        return this.reactionsService.create(id, {reactions: [payload]})
    }
}
