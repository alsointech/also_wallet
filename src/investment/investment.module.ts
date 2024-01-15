import { Module, forwardRef } from '@nestjs/common';

import { InvestmentController } from './controller/investment.controller';
import { InvestmentService } from './service/investment.service';
import { UserService } from 'src/user/service/user.service';

@Module({
  controllers: [InvestmentController],
  providers: [InvestmentService, UserService],
  exports: [InvestmentService]
})
export class InvestmentModule { }
