import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /* textInputSearch = new BehaviorSubject<string>('') */


  private searchText = new BehaviorSubject<string>('');
  currentSearchText = this.searchText.asObservable();

  constructor(private _http: HttpClient) { }


  updateSearchText(text: string) { this.searchText.next(text);
  }

  getProducts():Observable<any> {
    return this._http.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  getProductDetails(id:string):Observable<any> {
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getCategories():Observable<any> {
    return this._http.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
  getBrands():Observable<any> {
    return this._http.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

  getSpecificBrand(id:string):Observable<any> {
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`)
  }
  getSpecificCategory(id:string):Observable<any> {
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`)
  }

}
