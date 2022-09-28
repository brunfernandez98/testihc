import { Container } from "inversify";
import 'reflect-metadata';
import { StoreRepositoryImpl } from "../data/repositories/storeRepository";
import { StoreService } from "../data/services/storeService";
import { StoreRepository } from "../domain/repositories/storeRepository";
import { GetStoresUseCase } from "../domain/useCases/getStores";
import { StoreViewModel } from "../ui/screens/store/viewModel";


export const container = new Container({
    autoBindInjectable: true,
    skipBaseClassChecks: true,
  });
  



//Use Cases

container.bind<GetStoresUseCase>("GetStoresUseCase").to(GetStoresUseCase);

//Repositories

container.bind<StoreRepository>("StoreRepository").to(StoreRepositoryImpl);

//Services

container.bind<StoreService>("StoreService").to(StoreService);

//View Models

container.bind<StoreViewModel>("StoreViewModel").to(StoreViewModel);



