import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ExpenseService } from '../service/expense.service';
import { CreateExpenseDto } from '../dto/create-expense.dto';
import { UpdateExpenseDto } from '../dto/update-expense.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard('jwt'))
@ApiTags('expense')
@Controller('expense')
export class ExpenseController {
    constructor(private readonly expenseService: ExpenseService) { }

    @Post()
    @ApiOperation({ summary: 'register a new expense' })
    create(@Body() createExpenseDto: CreateExpenseDto) {
        return this.expenseService.create(createExpenseDto);
    }

    @Get()
    @ApiOperation({ summary: 'list all expenses' })
    findAll() {
        return this.expenseService.findAll();
    }

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

    @Delete(':id')
    @ApiOperation({ summary: 'delete an expense' })
    remove(@Param('id') id: string) {
        return this.expenseService.remove(id);
    }
}
