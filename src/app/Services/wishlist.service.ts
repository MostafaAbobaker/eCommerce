import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  WishlistNumber= new BehaviorSubject<any>(0);

  WishlistProducts = new BehaviorSubject<string []>([]);
  constructor(private _http:HttpClient) {

    this.getWishlistItems().subscribe({
      next:(result: any) => {
        this.WishlistNumber.next(result.count);
        console.log('Map Wish List',(result.data as IProduct []).map((product)=>product._id));
        this.WishlistProducts.next((result.data as IProduct []).map((product)=>product._id));
        this.WishlistNumber.next((result.data as IProduct []).length);
        // this.WishlistNumber.next(result.count);
      }
    })
  }
  getWishlistItems(): Observable<any> {
    return this._http.get('https://ecommerce.routemisr.com/api/v1/wishlist')
  }

  addWishlistItem(product_id:string): Observable<any> {
    return this._http.post('https://ecommerce.routemisr.com/api/v1/wishlist',
      {productId: product_id}
      )
  }
  removeWishlistItem(id:string): Observable<any> {
    return this._http.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`
      )
  }
}
