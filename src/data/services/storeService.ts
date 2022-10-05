import { gql } from "@apollo/client";
import { injectable } from "inversify";

import { DocumentNode, useQuery } from "@apollo/client";
import { client } from "../../configApollo";

export const query = async (query: DocumentNode) => {
  const result = await client.query({
    query: query,
  });

  return result;
};

const GET_STORES = gql`
  query Query {
    getStores {
      id
      name
    }
  }
`;

@injectable()
export class StoreService {
  async getStores(): Promise<any> {
    try {
      const data = await query(GET_STORES);
      return data.data.getStores;
    } catch (error) {
      return error;
    }
  }
}
