import { Body, Controller, Post } from '@nestjs/common';


@Controller('/wires/auth')
export class AuthController {
    @Post('signup')
     createUser(@Body() requestBody: any) {
        return {
            message: 'user created',
            requestBody,
        }
     }
}
