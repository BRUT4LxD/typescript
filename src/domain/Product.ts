import { DEFAULT, ServiceType, ServiceYear } from "./constants";

export class Product {
    price: number;
    serviceType: ServiceType;
    serviceYear?: ServiceYear;

    constructor(price: number, serviceType: ServiceType, serviceYear?: ServiceYear) {
        this.price = price;
        this.serviceType = serviceType;
        this.serviceYear = isNullOrUndefined(serviceYear) ? DEFAULT : serviceYear;
    }
}