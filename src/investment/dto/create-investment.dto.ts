

import {
    IsString,
    IsNumber,
    IsNotEmpty,
    IsPositive,
    IsLowercase,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { Expose } from 'class-transformer';

export class CreateInvestmentDto {
    @IsString()
    @IsNotEmpty()
    @Column({ name: 'inv_type'})
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

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: `investment's owner` })
    readonly userId: string
}

