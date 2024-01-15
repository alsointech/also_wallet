import { MigrationInterface, QueryRunner } from "typeorm";

export class Usersid1704550446924 implements MigrationInterface {
    name = 'Usersid1704550446924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP CONSTRAINT "FK_e4f0cfe94d01377877528a764b2"`);
        await queryRunner.query(`ALTER TABLE "investment" DROP CONSTRAINT "PK_ad085a94bd56e031136925f681b"`);
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "investment" ADD CONSTRAINT "PK_ad085a94bd56e031136925f681b" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "investment" ADD CONSTRAINT "FK_e4f0cfe94d01377877528a764b2" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "investment" DROP CONSTRAINT "FK_e4f0cfe94d01377877528a764b2"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "investment" DROP CONSTRAINT "PK_ad085a94bd56e031136925f681b"`);
        await queryRunner.query(`ALTER TABLE "investment" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "investment" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "investment" ADD CONSTRAINT "PK_ad085a94bd56e031136925f681b" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "investment" ADD CONSTRAINT "FK_e4f0cfe94d01377877528a764b2" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
