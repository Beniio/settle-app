import {MikroORM} from "@mikro-orm/core";
import { _prod_ } from "./constants";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
    console.log(__dirname);
    const orm = await MikroORM.init(mikroOrmConfig);
    const post = orm.em.create(Post,{title: "example"});
    await orm.em.persistAndFlush(post);
}

main();