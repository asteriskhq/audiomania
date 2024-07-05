import type { QueryResolvers } from './../../../schema/types.generated.js';
export const user: NonNullable<QueryResolvers['user']> = async (_parent, _arg, _ctx) => {
  /* Implement Query.user resolver logic here */
  return {
    id: '420',
    fullName: 'Jane Doe',
    isAdmin: true,
  };
};
