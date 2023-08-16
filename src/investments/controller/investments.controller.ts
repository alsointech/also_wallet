import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InvestmentsService } from '../service/investments.service';

@ApiTags('investments')
@Controller('investments')
export class InvestmentsController {
    constructor(
        private investmentsService: InvestmentsService,
    ) { }

    @Get('')
    @ApiOperation({ summary: 'list all investments' })
    getInvestments(): any {
        return this.investmentsService.findAll()
    }

    @Get(':id')
    @ApiOperation({ summary: 'get investment by id' })
    getInvById(@Param('id', ParseIntPipe) id: number) {
        console.log('entrooo hp vida carechimva');
        return this.investmentsService.findOne(id)
    }

    @Post('')
    @ApiOperation({ summary: 'create investment' })
    createMessage(@Body() payload: any) {
        return this.investmentsService.create(payload)
    }

    @Patch(':id')
    @ApiOperation({ summary: 'delete investment' })
    deleteMessage(@Param('id', ParseIntPipe) id: number) {
        return this.investmentsService.delete(id)
    }
}
