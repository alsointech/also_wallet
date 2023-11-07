import { MigrationInterface, QueryRunner } from "typeorm";

export class Investment1699303695914 implements MigrationInterface {
    name = 'Investment1699303695914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "investment" ("id" SERIAL NOT NULL, "invType" character varying(100) NOT NULL, "ammount" integer NOT NULL, "description" text NOT NULL, "visible" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_ad085a94bd56e031136925f681b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "investment"`);
    }

}
