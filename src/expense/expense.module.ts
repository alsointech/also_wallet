import { Module } from '@nestjs/common';

import { ExpenseController } from './controller/expense.controller';
import { ExpenseService } from './service/expense.service';
import { UserService } from 'src/user/service/user.service';

@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService, UserService],
  exports: [ExpenseService]
})
export class ExpenseModule {}
