import { PartialType } from '@nestjs/swagger'
// import { PartialType } from '@nestjs/mapped-types'
import { IsNotEmpty, IsString    } from 'class-validator'
export class CreateMessageDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string
    readonly comments: any
    @IsString()
    @IsNotEmpty()
    readonly text: string
}

export class UpdateMessageDto extends PartialType(CreateMessageDto) {}