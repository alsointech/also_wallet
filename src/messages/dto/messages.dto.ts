import { PartialType } from '@nestjs/mapped-types'
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator'
export class CreateMessageDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string
    @IsString()
    @IsNotEmpty()
    readonly text: string
}

export class UpdateMessageDto extends PartialType(CreateMessageDto) {}