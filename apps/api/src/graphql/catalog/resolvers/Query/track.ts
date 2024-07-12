import { getTrackById } from '../../../../catalog/facade.js';
import type { QueryResolvers } from './../../../schema/types.generated.js';

export const track: NonNullable<QueryResolvers['track']> = async (_parent, arg, _ctx) => {
  return getTrackById(arg.id);
};
