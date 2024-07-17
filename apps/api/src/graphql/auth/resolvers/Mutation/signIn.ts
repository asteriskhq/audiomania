import type { MutationResolvers } from './../../../schema/types.generated.js';
import * as Auth from '../../../../auth/facade.js';
import { GraphQLError } from 'graphql';
import { AppContext } from '../../../../type.js';

export const signIn: NonNullable<MutationResolvers['signIn']> = async (_parent, { credentials }, ctx: AppContext) => {
  const { email, password } = credentials;

  const result = await Auth.signIn({ email, password });
  if (!result) {
    throw new GraphQLError('Invalid credentials');
  }

  const { sessionId, user, validUntil } = result;

  await ctx.request.cookieStore?.set({
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    domain: 'localhost',
    path: '/',
    name: 'session',
    value: sessionId,
    expires: validUntil,
  });
  return { user };
};
