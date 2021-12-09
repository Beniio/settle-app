import { MikroORM } from "@mikro-orm/core";
import path from "path/posix";
import { _prod_ } from "./constants";
import { Post } from "./entities/Post";

export default {
    migrations:{
        path: path.join(__dirname,"./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    dbName: 'settle',
    type: 'postgresql',
    debug: !_prod_
} as Parameters<typeof MikroORM.init>[0];