import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentController } from './investment.controller';
import { InvestmentService } from '../service/investment.service';

describe('InvestmentController', () => {
  let controller: InvestmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentController],
      providers: [InvestmentService],
    }).compile();

    controller = module.get<InvestmentController>(InvestmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
