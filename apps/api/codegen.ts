import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/schema': defineConfig({
      emitLegacyCommonJSImports: false,
    }),
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
};
export default config;
