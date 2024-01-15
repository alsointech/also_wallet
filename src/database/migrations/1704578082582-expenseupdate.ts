import { MigrationInterface, QueryRunner } from "typeorm";

export class Expenseupdate1704578082582 implements MigrationInterface {
    name = 'Expenseupdate1704578082582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expense" DROP COLUMN "investment_type"`);
        await queryRunner.query(`ALTER TABLE "expense" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "expense" ADD "category" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expense" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "expense" ADD "category" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "expense" ADD "investment_type" character varying(255) NOT NULL`);
    }

}
