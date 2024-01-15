import { MigrationInterface, QueryRunner } from "typeorm";

export class Expensecategory1704575390543 implements MigrationInterface {
    name = 'Expensecategory1704575390543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "expense" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "investment_type" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "ammount" integer NOT NULL, "description" text NOT NULL, "category" text NOT NULL, "visible" boolean NOT NULL DEFAULT true, "user_id" uuid NOT NULL, CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "expense" ADD CONSTRAINT "FK_8aed1abe692b31639ccde1b0416" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expense" DROP CONSTRAINT "FK_8aed1abe692b31639ccde1b0416"`);
        await queryRunner.query(`DROP TABLE "expense"`);
    }

}
