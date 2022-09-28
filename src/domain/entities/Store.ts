
import {Product} from './Product';

type ConstructorParams = {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    image?: string;
    products: Product[];
}



export class Store {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    image?: string;
    products: Product[];

    constructor(params: ConstructorParams) {
        this.id = params.id;
        this.name = params.name;
        this.address = params.address;
        this.city = params.city;
        this.state = params.state;
        this.zip = params.zip;
        this.image = params.image;
        this.products = params.products;
    }
        
}