import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';
import { User } from 'src/user/entities/user.entity';
import { Investment } from 'src/investment/entities/investment.entity';

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
                    synchronize: false,
                    autoLoadEntities: true,
                }
            },
        }),
        TypeOrmModule.forFeature([User, Investment])
    ],
    providers: [
/*         {
            provide: 'API_KEY',
            useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
        }, */
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule { }
