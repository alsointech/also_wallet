import { MigrationInterface, QueryRunner } from "typeorm";

export class Usersupdate1704210108878 implements MigrationInterface {
    name = 'Usersupdate1704210108878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
