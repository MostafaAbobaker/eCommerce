import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signup-old-school',
  templateUrl: './signup-old-school.component.html',
  styleUrls: ['./signup-old-school.component.scss']
})
export class SignupOldSchoolComponent {

  passwordType: boolean = true;
  rePasswordType: boolean = true;
  apiErrorMassage:string='';
  constructor(private _authService:AuthService, private _router:Router) {}

  RegisterFrom(form: NgForm) {
    this._authService.registerFrom(form.value).subscribe({
      next: (data:any) => {console.log(data)
        this._router.navigate(['/Login'])
      },
      error: (error:any) => {this.apiErrorMassage = error.error.message}

    })
  }
}
