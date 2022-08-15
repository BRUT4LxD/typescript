import { Order } from "./Order";

export abstract class PriceRule {
    
    abstract Apply(order: Order): void
};

export class PhotographyVideoPackage extends PriceRule {
    
    Apply(order: Order): void {
        if ()
    }

}