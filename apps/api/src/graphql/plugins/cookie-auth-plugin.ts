import { createGraphQLError, Plugin } from 'graphql-yoga';
import { getSessionById } from '../../auth/facade.js';

const tmp = new WeakMap();

declare module 'graphql-yoga' {
  interface YogaInitialContext {
    user?: NonNullable<Awaited<ReturnType<typeof getSessionById>>>['user'];
  }
}

export function useCookieAuth(): Plugin {
  return {
    async onRequestParse({ request }) {
      const session = await request.cookieStore?.get('session');
      if (!session) {
        return;
      }

      const validSession = await getSessionById(session.value);
      if (!validSession) {
        throw createGraphQLError('Unauthenticated', {
          extensions: {
            code: 'UNAUTHENTICATED',
            http: { status: 401 },
          },
        });
      }

      tmp.set(request, validSession.user);
    },
    async onContextBuilding({ context, extendContext }) {
      const user = tmp.get(context.request);
      if (user) {
        extendContext({ user });
      }

      tmp.delete(context.request);
    },
  };
}
