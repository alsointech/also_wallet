import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './messages.entity';

@Injectable()
export class MessagesService {
    private id = 1
    private messages: Message[] = [
        {
            id: this.id,
            // user: "5c91874d-e8f2-4119-9a80-8e3d8f23dfee",
            title: "new messages",
            text: "this is a desc message",
            // comments: [],
            // reactions: [],
            // createdAt: "2023-01-10",
            visible: true
        }
    ]

    findAll() {
        return this.messages
    }

    findOne(id: number) {
        const message = this.messages.find(item => item.id === id)
        // return !message?  throw "message not found" : message
        if (!message) throw new HttpException('ERROR | message not found', HttpStatus.BAD_REQUEST);
        return message
    }

    create(payload: Message) {
        ++this.id
        const newMessage: Message = {
            id: this.id,
            ...payload,
            visible: true
        }
        this.messages.push(newMessage)
        return newMessage
    }

    update(id: number, payload: any) {
        // encontrar el id
        /* let messageFound = this.findOne(id)
        // si lo encuentra actualizarlo
        // id no es el mismo index, encontrarlo
        if (messageFound) {
            const index = this.messages.findIndex(item => item.id === id)
            // update the message
            // this.messages[index].visible = false;
            this.messages[index] = {
                ...messageFound,
                ...payload
            };
            return this.messages[index]
        }
        return null */
        // si no lo encuentra levantar error

        this.messages = this.messages.map(item => {
            if (item.id === id) {
                item = {
                    id,
                    ...payload
                };
                return item
            }
            return null
        })
        return this.messages
    }

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
