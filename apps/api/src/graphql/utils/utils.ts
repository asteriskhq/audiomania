import { createGraphQLError } from 'graphql-yoga';

export function unauthorized() {
  return createGraphQLError('Unauthorized', {
    extensions: {
      code: 'Unauthorized',
      http: { status: 401 },
    },
  });
}
