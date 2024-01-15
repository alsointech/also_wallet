import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './service/user.service';
import { UserController } from './contoller/user.controller';
import { InvestmentService } from 'src/investment/service/investment.service';
import { ExpenseService } from 'src/expense/service/expense.service';

@Module({
    controllers: [UserController],
    providers: [UserService, InvestmentService, ExpenseService],
    exports: [UserService]
})
export class UserModule { }
