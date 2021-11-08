import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brands';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';
import {map} from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';

//services are decorated with the Injectable decorator
//Singletons
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = "https://localhost:5001/api/";

  constructor(private https: HttpClient) { }

  getProducts(shopParams: ShopParams)  {
    let params = new HttpParams();
    if(shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }
    if(shopParams.typeId !== 0)
    {
      params = params.append('typeId', shopParams.typeId.toString());
    }
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());


    //pipe -> chain multiple rxjs operators.
    return this.https.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  getBrands() {
    return this.https.get<IBrand[]>(this.baseUrl + 'products/brands');
  }
  getTypes() {
    return this.https.get<IType[]>(this.baseUrl + 'products/types');
  }
}