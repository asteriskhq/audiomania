import { db } from '../db.js';

export function getTracks() {
  return db.query.trackTable.findMany();
}

export function getTrackById(id: string) {
  return db.query.trackTable.findFirst({
    where: (table, { eq }) => eq(table.id, id),
  });
}
