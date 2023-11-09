import { MigrationInterface, QueryRunner } from "typeorm";

export class MigUserAndInvestmentCreated1699327014626 implements MigrationInterface {
    name = 'MigUserAndInvestmentCreated1699327014626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "role" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "visible" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "investment" ("id" SERIAL NOT NULL, "investment_type" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "ammount" integer NOT NULL, "description" text NOT NULL, "visible" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_ad085a94bd56e031136925f681b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "investment"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
