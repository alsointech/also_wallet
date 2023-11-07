import { MigrationInterface, QueryRunner } from "typeorm";

export class InvDatesStamps1699307693181 implements MigrationInterface {
    name = 'InvDatesStamps1699307693181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "invType"`);
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "createDate"`);
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "updateDate"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "investment_type" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp without time zone`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp without time zone`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "investment_type"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "updateDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "createDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "invType" character varying(255) NOT NULL`);
    }

}
