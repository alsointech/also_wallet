import { PartialType } from '@nestjs/swagger';
import { CreateInvestmentDto } from './create-investment.dto';

export class UpdateInvestmentDto extends PartialType(CreateInvestmentDto) {}
