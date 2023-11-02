

import {
    IsString,
    IsNumber,
    IsNotEmpty,
    IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateInvestmentDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `investment's type for diversification` })
    readonly invType: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @ApiProperty({ description: `investment's ammount` })
    readonly ammount: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `investment's keyword, name or description` })
    readonly description: string;
}

export class UpdateInvestmentDto extends PartialType(CreateInvestmentDto) { }
