import { MigrationInterface, QueryRunner } from "typeorm";

export class Investment1699304148810 implements MigrationInterface {
    name = 'Investment1699304148810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "invType"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "invType" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "invType"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "invType" character varying(100) NOT NULL`);
    }

}
