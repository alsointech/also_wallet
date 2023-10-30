import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from '../config'
import { connect } from 'http2';

const API_KEY = '123456';
const API_KEY_PROD = 'PROD1212121SA';


@Global()
@Module({
    providers: [
        {
            provide: 'API_KEY',
            useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
        },
        {
            provide: 'PG',
            useFactory: (configService: ConfigType<typeof config>) => {
                const { name, port, password, user, host } = configService.postgres;

                const dbClient = new Client({
                    database: name,
                    port,
                    password,
                    user,
                    host
                })

                dbClient.connect()      
                return dbClient          
            },
            inject: [config.KEY]
        },
    ],
    exports: ['API_KEY', 'PG'],
})
export class DatabaseModule { }
