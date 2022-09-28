import { Store } from "../../domain/entities/Store";
import { StoreRepository } from "../../domain/repositories/storeRepository";
import { injectable, inject } from "inversify";
import { StoreService } from "../services/storeService";

@injectable()
export class StoreRepositoryImpl implements StoreRepository {
  constructor(@inject("StoreService") private storeService: StoreService) {}

  getStore(id: string): Store {
   throw new Error("Method not implemented.");
  }
  async getStores(): Promise<Store[]> {
    return await this.storeService.getStores();
  }
}
