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
import Redis from "ioredis";
import session from 'express-session';
import connectRedis from 'connect-redis';

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);
    await orm.getMigrator().up();

    const app = express();

    const RedisStore = connectRedis(session);
    const redis = new Redis();

    app.use(
			session({
				name: 'qid',
				store: new RedisStore({ 
					client: redis,
					disableTouch: true,
				}),
				cookie: {
					maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
					httpOnly: true,
					secure: _prod_,
					sameSite: 'lax'
				},
				secret: "randzzzz",
				resave: false
			})
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
          resolvers: [HelloResolver, PostResolver, UserResolver],
          validate: false
      }),
      context: ({req, res})=> ({em: orm.em, req, res})
    });

    apolloServer.applyMiddleware({app})

    app.listen(4000, () => {
        console.log('server started on localhost:4000')
    });
}

main().catch((err)=>{
    console.log(err)
});