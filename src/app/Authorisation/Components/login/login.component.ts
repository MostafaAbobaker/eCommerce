import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnDestroy {

  emailExample= 'meyorat307@ronete.com'

  typePassword:boolean = true;

  apiErrorMassage:string='';

  destroyLogin?: Subscription;

  constructor(private _authService:AuthService,
              private _router: Router,
              private _cartService:CartService,
              private _wishListService:WishlistService) {}


  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required]),
  })

  login() {
    console.log(this.loginForm);
    if(this.loginForm.valid) {
      this.destroyLogin = this._authService.loginForm(this.loginForm.value).subscribe({
        next:(data) => {console.log(data);
          this._router.navigate(['/Home']);
          this._authService.isLogged.next(true);
          localStorage.setItem('token', data.token);
          this._cartService.showCart();
          this._wishListService.showWishlist();
        },
        error:(err) => {console.log(err.error.message);
          this.apiErrorMassage = err.error.message;
        }

      })
    }
  }

  ngOnDestroy(): void {
    /* this.destroyLogin?.unsubscribe()
    console.log('Done Destroy' , this.destroyLogin); */

  }
}
