import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentsController } from './investments.controller';

describe('InvestmentsController', () => {
  let controller: InvestmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentsController],
    }).compile();

    controller = module.get<InvestmentsController>(InvestmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
