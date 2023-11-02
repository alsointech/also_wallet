import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';

import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config'

const API_KEY = '123456';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject:  [config.KEY],
            useFactory: (configService: ConfigType<typeof config>) => {
                const { dbName, port, password, user, host } = configService.postgres;

                return {
                    type: 'postgres',
                    host,
                    port,
                    username: user,
                    password,
                    database: dbName,
                    synchronize: true,
                    autoLoadEntities: true
                }
            },
        })
    ],
    providers: [
        {
            provide: 'API_KEY',
            useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
        },
        {
            provide: 'PG',
            useFactory: (configService: ConfigType<typeof config>) => {
                const { dbName, port, password, user, host } = configService.postgres;

                const dbClient = new Client({
                    database: dbName,
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
