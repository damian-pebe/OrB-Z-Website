import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../lib/graphqlClient";
import { gql } from "graphql-request";

const query = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      name
      email
    }
  }
`;

export function useUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => graphqlClient.request(query, { id }),
  });
}
