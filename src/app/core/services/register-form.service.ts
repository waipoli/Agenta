import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserRegister } from '../models/userRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = this.createFormGroup()
  }

  private createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  public getUserFromForm(): UserRegister {
    let result: UserRegister = {
      username: this.registerForm?.get('username')?.value,
      email: this.registerForm?.get('email')?.value,
      password: this.registerForm?.get('password')?.value,
      password2: this.registerForm?.get('password2')?.value,
    }
    return result;
  }
}
