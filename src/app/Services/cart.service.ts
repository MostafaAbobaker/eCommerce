import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  headerToken:any = {token: localStorage.getItem('token')}
  constructor(private _http:HttpClient) { }

  getCartItems(): Observable<any> {
    return this._http.get('https://ecommerce.routemisr.com/api/v1/cart',

    {headers: this.headerToken})
  }
  addCartItem(product_id:string): Observable<any> {
    return this._http.post('https://ecommerce.routemisr.com/api/v1/cart',
      {productId: product_id},
      {headers: this.headerToken})
  }
  updateCartItem(id:string,count:number): Observable<any> {
    return this._http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {count: count},
      {headers: this.headerToken})
  }
  removeCartItem(id:string): Observable<any> {
    return this._http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {headers: this.headerToken})
  }

  deleteCart(): Observable<any> {
    return this._http.delete('https://ecommerce.routemisr.com/api/v1/cart',
      {headers: this.headerToken})
  }
}
