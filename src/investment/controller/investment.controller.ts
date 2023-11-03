import { InvestmentService } from '../service/investment.service';
import { CreateInvestmentDto } from '../dto/create-investment.dto';
import { UpdateInvestmentDto } from '../dto/update-investment.dto';

import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('investments')
@Controller('investment')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Post()
  @ApiOperation({ summary: 'register a new investment' })
  create(@Body() payload: CreateInvestmentDto) {
    return this.investmentService.create(payload);
  }

  @Get('')
  @ApiOperation({ summary: 'list all investments' })
  findAll() {
    return this.investmentService.findAll();
  }
  
  @Get(':id')
  @ApiOperation({ summary: 'get investment by id' })  
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.investmentService.findOne(id);
  }
  
  @Patch(':id')
  @ApiOperation({ summary: 'update fields of an investment by id' })  
  update(@Param('id', ParseIntPipe) id: number, @Body() updateInvestmentDto: UpdateInvestmentDto) {
    return this.investmentService.update(id, updateInvestmentDto);
  }
  
  @Put(':id')
  @ApiOperation({ summary: 'delete or better make not visible and investment in db' })  
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.investmentService.remove(id);
  }
}
