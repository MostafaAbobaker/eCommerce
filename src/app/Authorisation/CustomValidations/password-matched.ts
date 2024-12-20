import { AbstractControl, ValidationErrors } from "@angular/forms";

/* export class PasswordMatched implements Validator {


  validate(control: AbstractControl): ValidationErrors | null {
    let [password, rePassword] = control.value;
    return password === rePassword && password && rePassword? null : { passwordMismatch: true };
  }

} */
  export let PasswordMatchedForm = (control: AbstractControl): ValidationErrors | null =>{
    const password = control?.get('password')?.value;
    const rePassword = control?.get('rePassword')?.value;
  return password == rePassword && password && rePassword? null : { passwordMismatch: true };
}
