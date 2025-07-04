import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient("https://your.api/graphql", {
  headers: {
    Authorization: `Bearer your_token_here`,
  },
});
