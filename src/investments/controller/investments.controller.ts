import { Body, Controller, Get, Post } from '@nestjs/common';
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
    getMessages(): any {
        return this.investmentsService.findAll()
    }

    @Post('')
    @ApiOperation({ summary: 'create investment' })
    createMessage(@Body() payload: any) {
        return this.investmentsService.create(payload)
    }
}
