import { pgSchema, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const catalogSchema = pgSchema('catalog');

export const trackTable = catalogSchema.table('track', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
  artist: text('artist').notNull(),
  source: text('source').notNull(),
});
