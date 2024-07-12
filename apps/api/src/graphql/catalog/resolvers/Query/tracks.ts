import { getTracks } from '../../../../catalog/facade.js';
import type { QueryResolvers } from './../../../schema/types.generated.js';

export const tracks: NonNullable<QueryResolvers['tracks']> = async (_parent, _arg, _ctx) => {
  return getTracks();
};
