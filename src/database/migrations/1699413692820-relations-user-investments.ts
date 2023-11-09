import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationsUserInvestments1699413692820 implements MigrationInterface {
    name = 'RelationsUserInvestments1699413692820'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP CONSTRAINT "FK_e37ec642d341163666411eae841"`);
        await queryRunner.query(`ALTER TABLE "investment" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD CONSTRAINT "FK_e4f0cfe94d01377877528a764b2" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP CONSTRAINT "FK_e4f0cfe94d01377877528a764b2"`);
        await queryRunner.query(`ALTER TABLE "investment" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD CONSTRAINT "FK_e37ec642d341163666411eae841" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
