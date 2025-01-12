import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1736251589783 implements MigrationInterface {
  name = 'CreateUser1736251589783';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "app"."user" ("id" SERIAL NOT NULL, "creationdate" TIMESTAMP NOT NULL DEFAULT now(), "updatedate" TIMESTAMP NOT NULL DEFAULT now(), "deletedate" TIMESTAMP, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "app"."user"`);
  }
}
