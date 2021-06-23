import { productRecords } from "../data/productrecords";
import { Product } from "../models/product";

export class ProductService {
    public getProducts(): Product[] {
        return productRecords;
    }
}