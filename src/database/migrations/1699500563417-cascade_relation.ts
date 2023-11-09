import { MigrationInterface, QueryRunner } from "typeorm";

export class CascadeRelation1699500563417 implements MigrationInterface {
    name = 'CascadeRelation1699500563417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" ADD CONSTRAINT "FK_e4f0cfe94d01377877528a764b2" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP CONSTRAINT "FK_e4f0cfe94d01377877528a764b2"`);
    }

}
