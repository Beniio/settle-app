import "reflect-metadata"; 
import {MikroORM} from "@mikro-orm/core";
import { _prod_ } from "./constants";
import mikroOrmConfig from "./mikro-orm.config";
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);
    await orm.getMigrator().up();

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
          resolvers: [HelloResolver, PostResolver, UserResolver],
          validate: false
      }),
      context: () => ({em: orm.em})
    });

    apolloServer.applyMiddleware({app})

    app.listen(4000, () => {
        console.log('server started on localhost:4000')
    })
}

main().catch((err)=>{
    console.log(err)
});