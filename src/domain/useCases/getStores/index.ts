import { injectable,inject } from "inversify";
import { StoreRepository } from "../../repositories/storeRepository";


@injectable()
export class GetStoresUseCase {
    constructor(@inject('StoreRepository') private repository: StoreRepository) { }
    
    async run() {
       const stores = await this.repository.getStores();
       return stores;
    }
}