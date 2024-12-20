import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { PasswordMatchedForm } from '../../CustomValidations/password-matched';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  typePassword : boolean=true;
  typeRePassword : boolean=true;
  apiErrorMessage:string='';
  constructor(private _authService:AuthService, private _router:Router ) { }

  RegisterFrom:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{5,}$/)]),
    rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{5,}$/)]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}/)]),
  }, {
    validators: PasswordMatchedForm
  });

  register() {
    console.log(this.RegisterFrom);
    if(this.RegisterFrom.valid) {
      this._authService.registerFrom(this.RegisterFrom.value).subscribe({
        next:(data) =>{
          console.log(data);
          this._router.navigate(['/Login']);
        },
        error:(err)=>{
          console.log(err.error.message);
          this.apiErrorMessage = err.error.message;
        }


      })
    }
  }
}
