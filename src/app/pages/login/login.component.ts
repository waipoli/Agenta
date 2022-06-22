import {Component, OnInit} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {GlobalConstants} from "../../global-constants";
import {GamesService} from "../../core/services/games.service";
import {LoginService} from "../../core/services/login.service";
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/models/user";

// import * as Console from "console";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title: String = GlobalConstants.title;
  passwordError = "";

  constructor(private _router: Router, private loginService: LoginService, private userService: UserService) {
  }


  ngOnInit(): void {

  }

  login(username: string, password: string) {
    this.loginService.login({
      username: username,
      password: password
    }).subscribe({
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
        console.log("error")
        this.passwordError = "User with this username and password not found";
      }
    })


  }
}

