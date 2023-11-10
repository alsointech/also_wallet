import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber, IsPositive } from "class-validator";


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `user's role` })
    readonly role: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `user's name` })
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `user's last name` })
    readonly lastName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `user's email` })
    readonly email: string;
}
