import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.createFormGroup()
  }

  private createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      password: new FormControl('', Validators.required)
    });
  }

  public getUserFromForm(): UserLogin {
    const result: UserLogin = {
      username: this.loginForm?.get('username')?.value,
      password: this.loginForm?.get('password')?.value,
    };
    return result;
  }
}
