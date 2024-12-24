import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent {
  apiErrorMassage:string = ''

  constructor(private _authService:AuthService , private _router: Router) { }

  verifyCodeForm:FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
  });
  verifyCode(){
    if(this.verifyCodeForm.valid) {
      this._authService.verifyCode(this.verifyCodeForm.value).subscribe({
        next:(data)=> {console.log(data)
          this._router.navigate(['/Reset-Password'])
        },
        error:(err)=> {this.apiErrorMassage = err.error.message }
      });
    }
  }
}
