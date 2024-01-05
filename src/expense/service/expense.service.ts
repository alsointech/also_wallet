import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from '../dto/create-expense.dto';
import { UpdateExpenseDto } from '../dto/update-expense.dto';

@Injectable()
export class ExpenseService {
  create(createExpenseDto: CreateExpenseDto) {
    return 'This action adds a new expense';
  }

  findAll() {
    return `This action returns all expense`;
  }

  findOne(id: string) {
    return `This action returns a #${id} expense`;
  }

  update(id: string, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: string) {
    return `This action removes a #${id} expense`;
  }
}
