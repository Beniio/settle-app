import {MikroORM} from "@mikro-orm/core";
import { _prod_ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
    const orm = await MikroORM.init({
        entities:[Post],
        dbName:'settle',
        type:'postgresql',
        debug: !_prod_
    });
    
    const post = orm.em.create(Post,{title: "example"});
    await orm.em.persistAndFlush(post);
}

main();
