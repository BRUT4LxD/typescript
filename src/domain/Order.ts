import { Product } from "./Product";

export class Order {
    products: Array<Product>;
    basePrice: number;
    finalPrice: number;

    constructor(){
        this.products = new Array();
        this.basePrice = 0;
        this.finalPrice = 0;
    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }


}