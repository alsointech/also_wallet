import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from 'src/messages/entity/messages.entity';
import { MessagesService } from 'src/messages/service/messages.service';

@Injectable()
export class CommentsService {
    // to do
    private messages: any
    constructor(
        private messagesService: MessagesService
    ) { }

    // create(id: number, payload: CreateCommentDto) {

    create(id: number, payload: any) {
        // find messages
        this.messages = this.messagesService.findAll();
        console.log("messages: " + JSON.stringify(this.messages));
        console.log("id, payload " + [id, JSON.stringify(payload, undefined, 4)]);

        this.messages = this.messages.map(item => {
            if (item.id === id) {
                const includeComments = Object.keys(payload).includes('comments')
                if (includeComments) {
                    if (payload.comments && payload.comments.length > 0) {
                        item = {
                            ...item,
                            ...item.comments.push(payload.comments[0])
                        }
                    }
                }
                return item
            } else {
                throw new NotFoundException(`message #${id} not found`);
            }
        })
        return this.messages
    }
}