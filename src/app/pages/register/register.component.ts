import {Component, OnInit} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {GlobalConstants} from "../../global-constants";
import {RegisterService} from "../../core/services/register.service";
import { RegisterFormService } from 'src/app/core/services/register-form.service';
import {User} from "../../core/models/user";
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UserRegister } from 'src/app/core/models/userRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = GlobalConstants.title;
  passwordMatch = ""
  usernameEmpty = ""
  registerForm: FormGroup = this.registerFormService.registerForm;

  constructor(private router: Router, private _registerService: RegisterService, private registerFormService: RegisterFormService) {
  }

  ngOnInit(): void {
  }

  register() {
    let userRegister: UserRegister = this.registerFormService.getUserFromForm();
    if (userRegister.password != userRegister.password2) {
      this.passwordMatch = "Password doesn't match";
      return;
    }
    if (userRegister.password2 == "") {
      this.passwordMatch = "Password too easy";
      return;
    }
    if (userRegister.username == "") {
      this.usernameEmpty = "Username must not be empty";
      return;
    }

    let user: User = {
      username: userRegister.username,
      password: userRegister.password,
      email: userRegister.email,
      name: "",
      details: "",
      birthdayDay: new Date(),
      country: "",
      avatarId:0,
      id: 0
    }
    this._registerService.register(user).subscribe({
      next: res => {
        this.router.navigate(["/login"]);
      },
      error: err => {
        if (err.error == "username-duplicate") {
          this.usernameEmpty = "This username is already taken by another user";
        }
      }
    });

  }

  clearPasswordError(): void {
    this.passwordMatch = ""
  }

  clearUsernameError(): void {
    this.usernameEmpty = ""
  }
}
