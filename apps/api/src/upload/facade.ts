import { db } from '../db.js';
import { uploadTrackTable } from './db-schema.js';

export async function registerTrack(name: string, userId: string) {
  const [{ id }] = await db.insert(uploadTrackTable).values({ name, userId }).returning({ id: uploadTrackTable.id });

  return id;
}
