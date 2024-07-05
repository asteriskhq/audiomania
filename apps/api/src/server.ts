import { createYoga, createSchema } from 'graphql-yoga';
import { createServer } from 'node:http';
import { typeDefs } from './graphql/schema/typeDefs.generated.js';
import { resolvers } from './graphql/schema/resolvers.generated.js';

const yoga = createYoga({ schema: createSchema({ typeDefs, resolvers }) });
const server = createServer(yoga);
server.listen(3001);
