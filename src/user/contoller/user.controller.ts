import { Controller, Get, Post, Body, Patch, Param, Put, ParseIntPipe } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InvestmentService } from 'src/investment/service/investment.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly investmentService: InvestmentService
  ) { }

  @Post()
  @ApiOperation({ summary: 'create user' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all users' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get user by id' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get(':id/investment')
  @ApiOperation({ summary: 'get investments by user' })
  findByUser(@Param('id', ParseIntPipe) id: string) {
    return this.investmentService.findAll(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update user' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'turn off visibility of a user' })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.userService.remove(id);
  }
}
