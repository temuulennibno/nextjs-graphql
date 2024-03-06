import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/graphql/schemas/index.ts",
  documents: "./src/graphql/queries/**/*.graphql",

  generates: {
    "./src/graphql/generated/index.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers", "typescript-react-apollo"],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: "@apollo/client",
        apolloReactCommonImportFrom: "@apollo/client",
      },
    },
  },
};

export default config;
