import { ExpenseService } from '../service/expense.service';
import { CreateExpenseDto } from '../dto/create-expense.dto';
import { UpdateExpenseDto } from '../dto/update-expense.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';
import { IsAdmin } from 'src/auth/decorators/is-admin/is-admin.decorator';
import { Role } from 'src/auth/models/roles.models';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('expense')
@Controller('expense')
export class ExpenseController {

    constructor(private readonly expenseService: ExpenseService) { }

    @IsAdmin(Role.ADMIN)
    @Post()
    @ApiOperation({ summary: 'register a new expense' })
    create(@Body() createExpenseDto: CreateExpenseDto) {

        return this.expenseService.create(createExpenseDto);

    }

    @IsPublic()
    @Get()
    @ApiOperation({ summary: 'list all expenses' })
    findAll() {

        return this.expenseService.findAll();

    }

    @IsPublic()
    @Get(':id')
    @ApiOperation({ summary: 'list expense by user' })
    // findOne(@Param('id') id: string) {
    findOne(@Param('id') id: string) {

        return this.expenseService.findOne(id);

    }

    @Patch(':id')
    @ApiOperation({ summary: 'update an expense' })
    update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {

        return this.expenseService.update(id, updateExpenseDto);

    }

    @Put(':id')
    @ApiOperation({ summary: 'delete an expense' })
    remove(@Param('id') id: string) {

        return this.expenseService.remove(id);

    }
}
