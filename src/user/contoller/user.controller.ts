import { Controller, Get, Post, Body, Patch, Param, Put, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InvestmentService } from 'src/investment/service/investment.service';
import { ApiKeyGuard } from 'src/auth/guards/api-key/api-key.guard';
import { ExpenseService } from 'src/expense/service/expense.service';
import { IsPublic } from 'src/auth/decorators/is-public/is-public.decorator';

@UseGuards(ApiKeyGuard)
@ApiTags('user')
@Controller('user')
export class UserController {

    constructor(

        private readonly userService: UserService,

        private readonly investmentService: InvestmentService,

        private readonly expenseService: ExpenseService

    ) { }

    @Post()
    @ApiOperation({ summary: 'create user' })
    create(@Body() createUserDto: CreateUserDto) {

        return this.userService.create(createUserDto);

    }

    @IsPublic()
    @Get()
    @ApiOperation({ summary: 'get all users' })
    findAll() {

        return this.userService.findAll();

    }

    @IsPublic()
    @Get(':id')
    @ApiOperation({ summary: 'get user by id' })
    findOne(@Param('id') id: string) {

        return this.userService.findOne(id);

    }

    @IsPublic()
    @Get(':id/investment')
    @ApiOperation({ summary: 'get investments by user' })
    findInvestmentByUser(@Param('id') id: string) {

        return this.investmentService.findAll(id);

    }

    @IsPublic()
    @Get(':id/expense')
    @ApiOperation({ summary: 'get expenses by user' })
    findExpenseByUser(@Param('id') id: string) {

        return this.expenseService.findAll(id);

    }

    @Patch(':id')
    @ApiOperation({ summary: 'update user' })
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

        return this.userService.update(id, updateUserDto);

    }

    @Put(':id')
    @ApiOperation({ summary: 'turn off visibility of a user' })
    remove(@Param('id') id: string) {

        return this.userService.remove(id);

    }
}
