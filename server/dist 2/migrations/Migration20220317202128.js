"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220317202128 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220317202128 extends migrations_1.Migration {
    async up() {
        this.addSql('drop table if exists "user" cascade;');
    }
}
exports.Migration20220317202128 = Migration20220317202128;
