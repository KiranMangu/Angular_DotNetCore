import { Injectable } from '@angular/core';
import { Data } from '../_models/data.model';
import { Product } from '../_models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  data: Data;
  constructor() {
    this.data = new Data();
  }

  getProducts(): Product[] {
    return this.data.getData();
  }
}
