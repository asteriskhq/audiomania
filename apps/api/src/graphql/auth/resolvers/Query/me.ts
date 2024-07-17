import type { QueryResolvers } from './../../../schema/types.generated.js';
import { AppContext } from '../../../../type.js';

export const me: NonNullable<QueryResolvers['me']> = async (_parent, _arg, ctx: AppContext) => {
  return ctx.user;
};
