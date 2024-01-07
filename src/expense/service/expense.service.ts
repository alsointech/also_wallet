import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';

import { CreateExpenseDto } from '../dto/create-expense.dto';
import { UpdateExpenseDto } from '../dto/update-expense.dto';
import { Expense } from 'src/expense/entities/expense.entity';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class ExpenseService {

    constructor(

        @InjectRepository(Expense) private expenseRepo: Repository<Expense>,

        private userService: UserService

    ) { }

    async create(payload: CreateExpenseDto) {

        const newExpense = this.expenseRepo.create(payload)

        if (payload.userId) {

            const user = await this.userService.findOne(payload.userId)

            newExpense.userId = user.id
        }

        return this.expenseRepo.save(newExpense)

    }

    async findAll(userId?) {

        if (userId) {

            return this.expenseRepo.find({

                where: { userId }

            })
        }

        return this.expenseRepo.find()

    }

    async findOne(id: string): Promise<Expense | null> {

        const expense = await this.expenseRepo.findOneBy({ id })

        if (!expense) {

            throw new NotFoundException(`Expense #${id} not found`)

        }

        return expense

    }

    async update(id: string, payload: UpdateExpenseDto): Promise<Expense | null> {

        const updatedInv = await this.expenseRepo.findOneBy({ id })

        if (!updatedInv) {

            throw new NotFoundException(`Expense #${id} not found`)

        }

        this.expenseRepo.merge(updatedInv, payload)

        return this.expenseRepo.save(updatedInv)

    }

    async remove(id: string): Promise<Expense | null> {

        const expense = await this.expenseRepo.findOneBy({ id })

        if (!expense) {

            throw new NotFoundException(`Expense #${id} not found`)

        }

        this.expenseRepo.merge(expense, { visible: false })

        return this.expenseRepo.save(expense)

    }
}
