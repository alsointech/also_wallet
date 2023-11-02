import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InvestmentController } from './controller/investment.controller';
import { InvestmentService } from './service/investment.service';
import { Investment } from './entities/investment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Investment])],
  controllers: [InvestmentController],
  providers: [InvestmentService],
})
export class InvestmentModule { }
