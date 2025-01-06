import {   Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Authorisation/Services/auth.service';
import { ICart } from 'src/app/interfaces/icart';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  cartItemsNum?: any
  WishlistsNum?: any
  cartItems?:any
  langName: string='English';
  isLogin: boolean = false;
  searchInput: string = '';
  constructor(  private _authService:AuthService ,
                private _router:Router,
                private _cartService:CartService,
                private _wishlistService:WishlistService
              ) {
                this._cartService.getCartItems().subscribe({
                  next:(result) => {console.log('=> ',result)
                      this.cartItems = result.data.products;
                      console.log('===> ', this.cartItems);
                  },
                  error:(err) => {  console.log(err ); }
                })


  }
  ngOnInit(): void {
    this._authService.isLogged.subscribe((data)=>{this.isLogin = data})
    this._cartService.CartItemNumber.subscribe((data)=>{this.cartItemsNum = data})
    this._wishlistService.WishlistNumber.subscribe((data)=>{this.WishlistsNum = data})
  }

  logOut() {
    this._authService.logout();
    this._router.navigate(['/Login']);
  }

  clearCart() {
    this._cartService.deleteCart().subscribe({
      next:(data) => {
        this.cartItems = data.products
        console.log('Clear ',data);
        this.cartItemsNum = 0;
      },
      error:(err) => {console.log(err)}
    })
  }
  deleteItemCart(id: string) {
    this._cartService.removeCartItem(id).subscribe({
      next:(data) => {
        console.log('Delete Item',data);

        this.cartItems = data.data.products
        this.cartItemsNum = this.cartItemsNum - 1;
      },
      error:(err) => {console.log(err)}
    })
  }
}
