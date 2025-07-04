// hooks/useUser.ts
import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../lib/graphqlClient";
import { gql } from "graphql-request";
import { useUserStore } from "../store/userStore";

const query = gql`
  query GetUser {
    user {
      id
      name
      email
    }
  }
`;

export function useUser() {
  const setUser = useUserStore((s) => s.setUser);

  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const data = await graphqlClient.request<{
        user: { id: string; name: string; email: string };
      }>(query);
      setUser(data.user); // populate Zustand
      return data.user;
    },
  });
}
