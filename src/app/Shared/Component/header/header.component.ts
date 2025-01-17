import {   Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Authorisation/Services/auth.service';
import { ICart } from 'src/app/interfaces/icart';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

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
                private _wishlistService:WishlistService,
                private _productsService:ProductsService,
                private toastr: ToastrService
              ) {

  }
  ngOnInit(): void {
    this._authService.isLogged.subscribe((data)=>{this.isLogin = data})
    this._cartService.CartItemNumber.subscribe((data)=>{this.cartItemsNum = data})
    this._wishlistService.WishlistNumber.subscribe((data)=>{this.WishlistsNum = data})
    this._cartService.CartItemProduct.subscribe((product) => {this.cartItems = product})

  }

  onSearchChange() {
    this._productsService.updateSearchText(this.searchInput);

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
        this.toastr.info(data.message, 'Clear Cart', {
          closeButton: true,
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      },
      error:(err) => {console.log(err)}
    })
  }
  deleteItemCart(id: string) {
    this._cartService.removeCartItem(id).subscribe({
      next:(data) => {

        this.cartItems = data.data.products
        this.cartItemsNum = this.cartItemsNum - 1;
        this.toastr.info(data.message, 'Deleted', {
          closeButton: true,
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing'
        });
      },
      error:(err) => {console.log(err)}
    })
  }
}
