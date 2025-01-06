import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  WishListItems?: IProduct[]
  constructor(private _wishlistService:WishlistService, private _cartService: CartService) { }

  ngOnInit(): void {
    this.showWishlist()
  }
  showWishlist(): void {
    this._wishlistService.getWishlistItems().subscribe({
      next:(result) => {
        this.WishListItems = result.data;
      },
      error:(err) => {console.log(err)}

    })
  }

  addToCart(product_id:string){

    this._cartService.addCartItem(product_id).subscribe({
      next:(result) => {
        this._cartService.CartItemNumber.next(result.numOfCartItems);

      },
      error:(err) => {  console.log(err) }
    });
  }
  deleteItemWishList(id: string) {
    this._wishlistService.removeWishlistItem(id).subscribe({
      next:(res) => {
        console.log('Delete Item',res);
        this.showWishlist()
        console.log('+===+=>',res.data.length);

        this._wishlistService.WishlistNumber.next(res.data.length)
        // this.WishListItems = data.data;
      },
      error:(err) => {console.log(err)}
    })
  }
}
