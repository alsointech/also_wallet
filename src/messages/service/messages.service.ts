import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Message } from '../entity/messages.entity';
import { CreateMessageDto, UpdateMessageDto } from '../dto/messages.dto';

@Injectable()
export class MessagesService {
    private id = 1
    private messages: Message[] = [
        {
            id: this.id,
            // user: "5c91874d-e8f2-4119-9a80-8e3d8f23dfee",
            title: "new messages",
            text: "this is a desc message",
            comments: [],
            // reactions: [],
            // createdAt: "2023-01-10",
            visible: true
        }
    ]

    findAll() {
        return this.messages
    }

    findOne(id: number) {
        const message = this.messages.find((item) => item.id === id);
        if (!message) {
            throw new NotFoundException(`message #${id} not found`);
        }
        return message;
    }

    create(payload: CreateMessageDto) {
        ++this.id
        const newMessage: Message = {
            id: this.id,
            ...payload,
            visible: true
        }
        this.messages.push(newMessage)
        return newMessage
    }

    update(id: number, payload: UpdateMessageDto) {
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
                } else {
                    item = {
                        ...item,
                        ...payload
                    }
                }
                return item
            }
            return null
        })
        return this.messages
    }
    uy
    delete(id: number) {
        let messageFound = this.findOne(id)
        if (messageFound) {
            const index = this.messages.findIndex(item => item.id === id)
            this.messages[index].visible = false
            return this.messages[index]
        }
        return null
    }
}
