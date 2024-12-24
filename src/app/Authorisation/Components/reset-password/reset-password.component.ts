import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  apiErrorMassage:string = ''
  typePassword: boolean = true
  constructor(private _authService:AuthService , private _router: Router) { }
  resetPasswordForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{5,}$/)]),
  });
  resetPassword(){
    if(this.resetPasswordForm.valid) {
      this._authService.resetPassword(this.resetPasswordForm.value).subscribe({
        next:(data)=> {console.log(data)
          this._router.navigate(['/Login'])
        },
        error:(err)=> {this.apiErrorMassage = err.error.message }
      });
    }
  }
}
