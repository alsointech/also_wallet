import { IsBoolean, IsNumber, IsString } from 'class-validator'
export class CreateMessageDto {

    @IsNumber()
    readonly id: number
    @IsString()
    readonly title: string
    @IsString()
    readonly text: string
    @IsBoolean()
    readonly visible: boolean
}

export class UpdateMessageDto {
    @IsNumber()
    readonly id?: number
    @IsString()
    readonly title?: string
    readonly text?: string
    @IsBoolean()
    readonly visible?: boolean
}