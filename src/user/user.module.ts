import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './service/user.service';
import { UserController } from './contoller/user.controller';
import { InvestmentService } from 'src/investment/service/investment.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
