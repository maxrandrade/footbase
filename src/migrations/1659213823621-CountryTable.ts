import {MigrationInterface, QueryRunner} from "typeorm";

export class CountryTable1659213823621 implements MigrationInterface {
    name = 'CountryTable1659213823621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "country" ("id" SERIAL NOT NULL, "enUS" character varying NOT NULL, "ptBR" character varying NOT NULL, "flag" character varying NOT NULL, CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "country"`);
    }

}
