import {Component, OnInit} from '@angular/core';
import {User} from "../../../../core/models/user";
import {LoginService} from "../../../../core/services/login.service";
import {UserLogin} from "../../../../core/models/userLogin";
import {UserService} from "../../../../core/services/user.service";

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
    password: ""
  }

  constructor() {
  }

  ngOnInit(): void {
    let t: string | null = sessionStorage.getItem("User");
    if (t != null) {
      this.user = JSON.parse(t);
    }
  }

}
