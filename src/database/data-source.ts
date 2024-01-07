import { Investment } from 'src/investment/entities/investment.entity';
import { User } from 'src/user/entities/user.entity';

import { DataSource } from 'typeorm';

// export default new DataSource({
export const AppDataSource = new DataSource({
    type: 'postgres',
    // url: 'postgres:// root: 123456@ localhost: 5432/ also_wallet',
    username: 'root',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'also_wallet',
    synchronize: false,
    logging: false,
    //   entities: ['src/user/entities/user.entity.ts', 'src/investment/entities/investment.entity.ts'],
    entities: ['src/**/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts'],
    migrationsTableName: 'migrations',
});

