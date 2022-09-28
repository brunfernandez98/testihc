import { inject, injectable } from "inversify";
import { makeObservable, observable } from "mobx";
import { Store } from "../../../domain/entities/Store";
import { GetStoresUseCase } from "../../../domain/useCases/getStores";



@injectable()
export class StoreViewModel {
    @observable listStores: Store[];
    @observable isLoading: boolean = false;

    constructor(@inject('GetStoresUseCase') private stores:GetStoresUseCase) { 
       makeObservable(this);
    }
    
    async getStores() {
        const stores = await this.stores.run();
        this.listStores = stores;
        if(this.listStores.length > 0) {
            this.isLoading = true;
        }
    }
  
}