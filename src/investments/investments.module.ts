import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';

@Module({
  controllers: [ControllerController]
})
export class InvestmentsModule {}
