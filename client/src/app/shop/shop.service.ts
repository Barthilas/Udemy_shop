import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brands';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';

//services are decorated with the Injectable decorator
//Singletons
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = "https://localhost:5001/api/";

  constructor(private https: HttpClient) { }

  getProducts(brandId?: number, typeId?: number)  {

    return this.https.get<IPagination>(this.baseUrl + 'products');
  }

  getBrands() {
    return this.https.get<IBrand[]>(this.baseUrl + 'products/brands');
  }
  getTypes() {
    return this.https.get<IType[]>(this.baseUrl + 'products/types');
  }
}
