import { pgSchema, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const uploadSchema = pgSchema('upload');

export const uploadTrackStatus = uploadSchema.enum('upload_track_status', ['pending', 'completed', 'error']);

export const uploadTrackTable = uploadSchema.table('track', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  userId: uuid('user_id').notNull(),
  status: uploadTrackStatus('status').default('pending'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});
