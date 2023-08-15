import { Injectable } from '@nestjs/common';

@Injectable()
export class InvestmentsService {
    private id = 1
    private messages = [
        {
            id: this.id,
            invType: "renta fija",
            createdAt: "2023-01-10",
            description: "click green",
            visible: true,
        }
    ]

    findAll() {
        return this.messages
    }

    create(payload: any) {
        ++this.id
        const newMessage: any = {
            id: this.id,
            ...payload,
            createdAt: "2023-01-10",
            visible: true
        }
        this.messages.push(newMessage)

        return newMessage
    }
}
