import { _prod_ } from "./constants";
import { Post } from "./entities/Post";

export default {
    entities: [Post],
    dbName: 'settle',
    type: 'postgresql',
    debug: !_prod_
} as const;