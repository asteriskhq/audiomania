/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.js';
import { user as Query_user } from './../user/resolvers/Query/user.js';
import { User } from './../user/resolvers/User.js';
export const resolvers: Resolvers = {
  Query: { user: Query_user },

  User: User,
};
