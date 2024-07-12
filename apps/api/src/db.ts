import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as authSchema from './auth/db-schema.js';
import * as catalogSchema from './catalog/db-schema.js';

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();
export const db = drizzle(client, {
  schema: {
    ...authSchema,
    ...catalogSchema,
  },
});
