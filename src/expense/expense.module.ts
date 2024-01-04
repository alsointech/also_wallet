import { Module } from '@nestjs/common';
import { ExpenseService } from './service/expense.service';
import { ExpenseController } from './controller/expense.controller';

@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService]
})
export class ExpenseModule {}
