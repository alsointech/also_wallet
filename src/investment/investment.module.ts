import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InvestmentController } from './controller/investment.controller';
import { InvestmentService } from './service/investment.service';
import { Investment } from './entities/investment.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/service/user.service';

@Module({
  controllers: [InvestmentController],
  providers: [InvestmentService, UserService],
  exports: [InvestmentService]
})
export class InvestmentModule { }
