import {   Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Authorisation/Services/auth.service';
import { ICart } from 'src/app/interfaces/icart';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  cartItems?: any
  langName: string='English';
  isLogin: boolean = false;

  constructor( private _authService:AuthService , private _router:Router , private _cartService:CartService) {}
  ngOnInit(): void {
    this._authService.isLogged.subscribe((data)=>{this.isLogin = data})
    this._cartService.getCartItems().subscribe({
      next:(result) => {
        this.cartItems = result.data;
        console.log(this.cartItems);

        },
      error:(err) => {  console.log(err) }
    });
  }

  logOut() {
    this._authService.logout();
    this._router.navigate(['/Login']);
  }

  deleteCart(){
    this._cartService.deleteCart().subscribe({
      next:(result) => {
        console.log(result);
        this.cartItems = null;
      },
      error:(err) => {  console.log(err) }
    });
  }
}
