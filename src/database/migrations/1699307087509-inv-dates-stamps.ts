import { MigrationInterface, QueryRunner } from "typeorm";

export class InvDatesStamps1699307087509 implements MigrationInterface {
    name = 'InvDatesStamps1699307087509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" ADD "createDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "updateDate" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "updateDate"`);
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "createDate"`);
    }

}
