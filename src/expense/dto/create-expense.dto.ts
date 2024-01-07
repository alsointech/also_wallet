import { IsString, IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";

export class CreateExpenseDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `expense's type for diversification` })
    readonly category: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `expense's keyword, name or description` })
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @ApiProperty({ description: `expense's ammount` })
    readonly ammount: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `expense's owner` })
    readonly userId: string
}
