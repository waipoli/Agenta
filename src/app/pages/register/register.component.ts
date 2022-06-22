import {Component, OnInit} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {GlobalConstants} from "../../global-constants";
import {RegisterService} from "../../core/services/register.service";
import {User} from "../../core/models/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = GlobalConstants.title;
  passwordMatch = ""
  usernameEmpty = ""

  constructor(private router: Router, private _registerService: RegisterService) {
  }

  ngOnInit(): void {
  }

  register(name: string, email: string, password: string, password_check: string) {
    if (password != password_check) {
      this.passwordMatch = "Password doesn't match";
      return;
    }
    if (password_check == "") {
      this.passwordMatch = "Password too easy";
      return;
    }
    if (name == "") {
      this.usernameEmpty = "Username must not be empty";
      return;
    }

    let user: User = {
      username: name,
      password: password,
      email: email,
      name: name,
      details: "",
      birthdayDay: new Date(),
      country: "",
      avatarId:0,
      id: 0
    }
    this._registerService.register(user).subscribe({
      next: res => {
        console.log("Success!!!")
        this.router.navigate(["/login"]);
      },
      error: err => {
        console.log(err.error)
        if (err.error == "username-duplicate") {
          this.usernameEmpty = "This username is already taken by another user";
        }
      }
    });


    // this.api.register(name, password).subscribe((req: HttpResponse<any>) => {
    //   if (req.body.register != 0) {
    //     console.log("Successfully register!!!");
    //   } else {
    //     console.log("this name already used((");
    //   }
    // });
  }
}
