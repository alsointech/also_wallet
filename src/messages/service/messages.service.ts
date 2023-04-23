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
            reactions: [],
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
            comments: [],
            reactions: [],
            visible: true
        }
        this.messages.push(newMessage)

        return newMessage
    }

    update(id: number, payload: UpdateMessageDto) {
        this.messages = this.messages.map(item => {
            if (item.id === id) {
                item = {
                    ...item,
                    ...payload
                }
                return item
            } else {
                throw new NotFoundException(`message #${id} not found`)
            }
        })
        return this.messages
    }

    delete(id: number) {
        let messageFound = this.findOne(id)
        if (messageFound) {
            const index = this.messages.findIndex(item => item.id === id)
            this.messages[index].visible = false
            return {
                "delete": true,
                "status": "OK",
                "message": this.messages[index]
            }
        } else {
            throw new NotFoundException(`message #${id} not found`)
        }
    }
}
