import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnDestroy {

  typePassword:boolean = true;

  apiErrorMassage:string='';

  destroyLogin?: Subscription;

  constructor(private _authService:AuthService, private _router: Router) {}


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
          localStorage.setItem('token', data.token)
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
