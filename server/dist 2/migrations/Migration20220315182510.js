"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220315182510 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220315182510 extends migrations_1.Migration {
    async up() {
        this.addSql('drop table if exists "user" cascade;');
    }
}
exports.Migration20220315182510 = Migration20220315182510;
