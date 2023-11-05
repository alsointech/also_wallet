import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeLimitInvtype1699151351102 implements MigrationInterface {
    name = 'ChangeLimitInvtype1699151351102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "invType"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "invType" character varying(300) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "invType"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "invType" character varying(255) NOT NULL`);
    }

}
