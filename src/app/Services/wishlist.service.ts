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
    this.showWishlist()

  }
  showWishlist() {
    this.getWishlistItems().subscribe({
      next:(result: any) => {
        this.WishlistProducts.next((result.data as IProduct []).map((product)=>product._id));
        this.WishlistNumber.next((result.data as IProduct []).length);
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
