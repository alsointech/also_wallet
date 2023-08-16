import { Injectable, NotFoundException } from '@nestjs/common';
import { isNotEmpty } from 'class-validator';

@Injectable()
export class InvestmentsService {
    private id = 1
    private investments = [
        {
            id: this.id,
            invType: "renta_fija",
            description: "click green",
            ammount: 5000000,
            createdAt: "2023-01-10",
            visible: true,
        }
    ]

    findOne(id: number) {
        const investment = this.investments.find((item) => item.id === id);
        if (!investment) {
            throw new NotFoundException(`investment #${id} not found`);
        }
        return investment;
    }

    findAll() {
        return this.investments
    }

    create(payload: any) {
        ++this.id
        const newInvestment: any = {
            id: this.id,
            ...payload,
            createdAt: "2023-01-12",
            visible: true
        }
        this.investments.push(newInvestment)

        return newInvestment
    }

    delete(id: number) {

        this.investments = this.investments.map(item => {
            if (item.id == id) {
                // item.visible = false
                return {
                    ...item,
                    visible: false
                }
            } else {
                return item
            }
        })
        return this.investments
    }
}
