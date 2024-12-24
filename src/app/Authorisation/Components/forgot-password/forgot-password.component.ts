import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  apiErrorMassage: string = '';

  constructor(private _authService:AuthService , private _router: Router) { }

  ForgotPasswordForm : FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  });

  forgotPassword() {
    if(this.ForgotPasswordForm.valid) {
      this._authService.forgotPassword(this.ForgotPasswordForm.value).subscribe({
        next:(data)=>{console.log(data)
          this._router.navigate(['/Verify-Code'])
        },
        error:(err) => {this.apiErrorMassage = err.error.message}
      })
    }
  }


}
