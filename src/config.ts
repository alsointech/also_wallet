import { registerAs } from "@nestjs/config";

/**
 * @description - type environment configuration variables
 */
export default registerAs('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT
        },
        apiKey: process.env.API_KEY,
    }
})

/**
 * use:
 * 
 * @file - fooBar.service.ts

import { Injectable, Inject } from ‘@nestjs/common’ ;
import { ConfigType } from ‘@nestjs/config’;
import { ConfigType } from ‘./config’;

@Inyectable()
export class AppService {
    constructor (
        @Inject(config.KEY) private configService: Configlype<typeof config>,
    ) {}
    getHello(): string {
        const apikey = this.configService.database.name;
    }
}
 */