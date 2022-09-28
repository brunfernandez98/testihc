import { DocumentNode, gql, useLazyQuery, useQuery } from "@apollo/client";
import { injectable } from "inversify";
import { Store } from "../../domain/entities/Store";
import { prepareQuery } from "./hooks/getData";

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
    const { doQuery } = prepareQuery(GET_STORES);
    try {
      const { data } = await doQuery();
      return data.getStores;
    } catch (error) {
      return error;
    }
  }
}
