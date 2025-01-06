import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  CartItemNumber= new BehaviorSubject<number>(0);

  constructor(private _http:HttpClient) {

    this.getCartItems().subscribe({
      next:(result) => {
        this.CartItemNumber.next(result.numOfCartItems);
      }
    })
  }

  getCartItems(): Observable<any> {
    return this._http.get('https://ecommerce.routemisr.com/api/v1/cart')
  }
  addCartItem(product_id:string): Observable<any> {
    return this._http.post('https://ecommerce.routemisr.com/api/v1/cart',
      {productId: product_id}
      )
  }
  updateCartItem(id:string,count:number): Observable<any> {
    return this._http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {count: count}
      )
  }
  removeCartItem(id:string): Observable<any> {
    return this._http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
      )
  }

  deleteCart(): Observable<any> {
    return this._http.delete('https://ecommerce.routemisr.com/api/v1/cart'
      )
  }

  shippingAddress(id:any , form:object): Observable<any> {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      {shippingAddress: form}
    )
  }
}
