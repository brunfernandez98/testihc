import { inject, injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
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
        this.setListStores(stores);
        if(stores.length > 0) {
            this.setIsLoading(true);
        }
        console.log(stores);
    }
    
    



   @action 
   private setListStores(stores: Store[]) {
        this.listStores = stores;
    }
  
    @action
    private setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }
}