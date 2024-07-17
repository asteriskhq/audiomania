import { db } from '../db.js';
import { compare } from 'bcrypt';
import { sessionTable } from './db-schema.js';

export async function signIn({ email, password }: { email: string; password: string }) {
  const user = await db.query.userTable.findFirst({
    where: (table, { eq }) => eq(table.email, email),
  });

  if (!user) {
    return null;
  }

  const passwordValid = await compare(password, user.password);
  if (!passwordValid) {
    return null;
  }

  const [session] = await db
    .insert(sessionTable)
    .values({
      userId: user.id,
      validUntil: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
      // validUntil: new Date(Date.now() + 1000 * 60 * 2), // 2 minutes for testing
    })
    .returning();

  return { user: normalize(user), sessionId: session.id, validUntil: session.validUntil };
}

export async function getSessionById(sessionId: string) {
  const session = await db.query.sessionTable.findFirst({
    where: (table, { eq, and, gt }) => and(eq(table.id, sessionId), gt(table.validUntil, new Date())),
    with: { user: { columns: { password: false } } },
  });

  return session;
}

function normalize<T extends { password: string }>(obj: T): Omit<T, 'password'> {
  const { password, ...rest } = obj;
  return rest;
}
