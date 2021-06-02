import {MigrationInterface, QueryRunner} from "typeorm";

export class validacoesUsers1622670438375 implements MigrationInterface {
    name = 'validacoesUsers1622670438375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_Users" ("id" varchar PRIMARY KEY NOT NULL, "email" varchar NOT NULL, "senha" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_Users"("id", "email", "senha", "created_at", "updated_at") SELECT "id", "email", "senha", "created_at", "updated_at" FROM "Users"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`ALTER TABLE "temporary_Users" RENAME TO "Users"`);
        await queryRunner.query(`CREATE TABLE "temporary_Users" ("id" varchar PRIMARY KEY NOT NULL, "email" varchar NOT NULL, "senha" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_259adf43b3b1c54115910c21f30" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "temporary_Users"("id", "email", "senha", "created_at", "updated_at") SELECT "id", "email", "senha", "created_at", "updated_at" FROM "Users"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`ALTER TABLE "temporary_Users" RENAME TO "Users"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" RENAME TO "temporary_Users"`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" varchar PRIMARY KEY NOT NULL, "email" varchar NOT NULL, "senha" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "Users"("id", "email", "senha", "created_at", "updated_at") SELECT "id", "email", "senha", "created_at", "updated_at" FROM "temporary_Users"`);
        await queryRunner.query(`DROP TABLE "temporary_Users"`);
        await queryRunner.query(`ALTER TABLE "Users" RENAME TO "temporary_Users"`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" varchar PRIMARY KEY NOT NULL, "email" varchar NOT NULL, "senha" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "Users"("id", "email", "senha", "created_at", "updated_at") SELECT "id", "email", "senha", "created_at", "updated_at" FROM "temporary_Users"`);
        await queryRunner.query(`DROP TABLE "temporary_Users"`);
    }

}
