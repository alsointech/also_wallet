import { registerAs } from "@nestjs/config";

/**
 * @description - type environment configuration variables
 */
export default registerAs('config', () => {
    return {
        /* database: {
            dbName: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT
        }, */
        postgres: {
            url: process.env.DATABASE_URL,
            /* dbName: process.env.POSTGRES_DB,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            password: process.env.POSTGRES_PASSWORD,
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST, */
        },
        apiKey: process.env.API_KEY,
        jwtSecret: process.env.JWT_SECRET,
    }
})
