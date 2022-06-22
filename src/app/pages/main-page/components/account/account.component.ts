import {Component, OnInit} from '@angular/core';
import {User} from "../../../../core/models/user";
import {LoginService} from "../../../../core/services/login.service";
import {UserLogin} from "../../../../core/models/userLogin";
import {UserService} from "../../../../core/services/user.service";
import {GlobalConstants} from "../../../../global-constants";
import {J} from "@angular/cdk/keycodes";
import {PasswordChange} from "../../../../core/models/passwordChange";
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user: User = {
    id: 0,
    name: "",
    username: "",
    email: "",
    birthdayDay: new Date(),
    country: "",
    details: "",
    avatarId: 1,
    password: ""
  }
  savedUser: User = {
    id: 0,
    name: "",
    username: "",
    email: "",
    birthdayDay: new Date(),
    country: "",
    details: "",
    avatarId: 1,
    password: ""
  }

  isOpen: boolean = false;

  constructor(private router: Router, private userService: UserService) {
  }

  getPath(imageId: number): string {
    return GlobalConstants.serverUrl + "image/" + imageId;
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("token") == null) {
      this.router.navigate(["/login"]);
      return;
    }
    let t: string | null = sessionStorage.getItem("User");
    if (t != null) {
      this.user = JSON.parse(t);
      this.savedUser = JSON.parse(t);

    }
  }

  updatePassword(oldPasswrod: string, newPassword1: string, newPassword2: string) {
    if (newPassword1 == newPassword2) {
      let passwordChange: PasswordChange = {
        oldPassword: oldPasswrod,
        newPassword: newPassword2
      }
      this.userService.updatePassword(passwordChange).subscribe({
        next: res => {
          console.log("res")
        },
        error: err => {
          console.log(err)
        }
      })
    } else {
      console.log("No.")
    }
  }

  isChanged(): boolean {
    // console.log(JSON.stringify(this.user))
    // console.log(JSON.stringify(this.savedUser))
    return JSON.stringify(this.user) != JSON.stringify(this.savedUser);
  }

  onClick() {
    this.userService.updateUser({
      name: this.user.name,
      username: this.user.username,
      details: this.user.details,
      country: this.user.country,
      birthdayDay: this.user.birthdayDay,
      id: this.user.id,
      avatarId: this.user.avatarId,
      email: this.user.email
    }).subscribe((res) => {
      this.user = res
      this.savedUser = JSON.parse(JSON.stringify(res))
      if (res != null)
        sessionStorage.setItem("User", JSON.stringify(res))
    })
  }
}
