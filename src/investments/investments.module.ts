import { Module } from '@nestjs/common';
import { InvestmentsController } from './controller/investments.controller';
import { InvestmentsService } from './service/investments.service';

@Module({
  controllers: [InvestmentsController],
  providers: [InvestmentsService]
})
export class InvestmentsModule {}
