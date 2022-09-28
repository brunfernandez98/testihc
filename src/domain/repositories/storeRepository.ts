import { Store } from "../entities/Store";


export interface StoreRepository {
    getStore(id: string): Store;
    getStores(): Promise<Store[]>;
}
