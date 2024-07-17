import { createYoga, createSchema } from 'graphql-yoga';
import { createServer } from 'node:http';
import { typeDefs } from './graphql/schema/typeDefs.generated.js';
import { resolvers } from './graphql/schema/resolvers.generated.js';
import { useCookies } from '@whatwg-node/server-plugin-cookies';
import { useCookieAuth } from './graphql/plugins/cookie-auth-plugin.js';

const yoga = createYoga({ schema: createSchema({ typeDefs, resolvers }), plugins: [useCookies(), useCookieAuth()] });
const server = createServer(yoga);
server.listen(3001);
