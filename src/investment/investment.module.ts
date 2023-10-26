import { Module } from '@nestjs/common';
import { InvestmentService } from './service/investment.service';
import { InvestmentController } from './controller/investment.controller';

@Module({
  controllers: [InvestmentController],
  providers: [InvestmentService],
})
export class InvestmentModule {}
