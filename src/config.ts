import { registerAs } from "@nestjs/config";

/**
 * @description - type environment configuration variables
 */
export default registerAs('config', () => {
    return {
        database: {
            dbName: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT
        },
        postgres: {
            /* dbName: process.env.POSTGRES_DB,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            password: process.env.POSTGRES_PASSWORD,
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST, */
            url: process.env.POSTGRES_URL,
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