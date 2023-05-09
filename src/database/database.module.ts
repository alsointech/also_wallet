import { Module, Global } from '@nestjs/common';
import { Client } from 'pg';

const API_KEY = '123456';
const API_KEY_PROD = 'PROD1212121SA';

const dbClient = new Client({
    user: 'root',
    host: 'localhost',
    database: 'social_app',
    password: '123456',
    port: 5432
})

dbClient.connect()

@Global()
@Module({
    providers: [
        {
            provide: 'API_KEY',
            useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
        },
        {
            provide: 'PG',
            useFactory: dbClient,
        },
    ],
    exports: ['API_KEY', 'PG'],
})
export class DatabaseModule { }