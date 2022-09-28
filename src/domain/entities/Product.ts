type ConstructorParams = {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: string;
}

export class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: string;

    constructor(params: ConstructorParams) {
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.price = params.price;
        this.image = params.image;
    }
}

