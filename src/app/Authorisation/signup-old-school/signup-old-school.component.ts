import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-old-school',
  templateUrl: './signup-old-school.component.html',
  styleUrls: ['./signup-old-school.component.scss']
})
export class SignupOldSchoolComponent {

  passwordType: boolean = true;
  rePasswordType: boolean = true;
  constructor() {}

  RegisterFrom(form: NgForm) {
    console.log(form.value);

  }
}
