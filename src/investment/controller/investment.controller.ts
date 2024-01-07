import { InvestmentService } from '../service/investment.service';
import { CreateInvestmentDto } from '../dto/create-investment.dto';
import { UpdateInvestmentDto } from '../dto/update-investment.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('investment')
@Controller('investment')
export class InvestmentController {

    constructor(private readonly investmentService: InvestmentService) { }

    @Post()
    @ApiOperation({ summary: 'register a new investment' })
    create(@Body() payload: CreateInvestmentDto) {

        return this.investmentService.create(payload);

    }

    @IsPublic()
    @Get('')
    @ApiOperation({ summary: 'list all investments' })
    findAll() {

        return this.investmentService.findAll();

    }

    @IsPublic()
    @Get(':id')
    @ApiOperation({ summary: 'get investment by id' })
    findOne(@Param('id', ParseIntPipe) id: string) {

        return this.investmentService.findOne(id);

    }

    @Patch(':id')
    @ApiOperation({ summary: 'update fields of an investment by id' })
    update(@Param('id', ParseIntPipe) id: string, @Body() updateInvestmentDto: UpdateInvestmentDto) {

        return this.investmentService.update(id, updateInvestmentDto);

    }

    @Put(':id')
    @ApiOperation({ summary: 'delete or better make not visible and investment in db' })
    remove(@Param('id', ParseIntPipe) id: string) {

        return this.investmentService.remove(id);

    }
}
