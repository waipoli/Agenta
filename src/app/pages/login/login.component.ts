import {Component, OnInit} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {GlobalConstants} from "../../global-constants";
import {GamesService} from "../../core/services/games.service";
import {LoginService} from "../../core/services/login.service";
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/models/user";
import { LoginFormService } from 'src/app/core/services/login-form.service';
import { FormGroup } from '@angular/forms';

// import * as Console from "console";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title: String = GlobalConstants.title;
  passwordError = "";
  loginForm: FormGroup = this.LoginFormService.loginForm;

  constructor(private _router: Router, private LoginFormService: LoginFormService, private loginService: LoginService, private userService: UserService) {
  }


  ngOnInit(): void {

  }

  login() {
    this.loginService.login(
      this.LoginFormService.getUserFromForm(),
    ).subscribe({
      next: res => {
        if (res.body?.token != null)
          sessionStorage.setItem("token", res.body?.token);
        if (sessionStorage.getItem("token") != null) {
          this.userService.getUser().subscribe((user: User) => {
            if (user != null)
              sessionStorage.setItem("User", JSON.stringify(user))
            this._router.navigate(["/"]);
          })
        }
      },
      error: err => {
        this.passwordError = "User with this username and password not found";
      }
    })


  }

  clearPasswordError(): void {
    this.passwordError = ""
  }
}

