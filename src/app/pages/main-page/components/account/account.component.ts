import {Component, OnInit} from '@angular/core';
import {User} from "../../../../core/models/user";
import {LoginService} from "../../../../core/services/login.service";
import {UserLogin} from "../../../../core/models/userLogin";
import {UserService} from "../../../../core/services/user.service";
import {GlobalConstants} from "../../../../global-constants";

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
    avatarId: 0,
    password: ""
  }

  constructor() {
  }

  getPath(imageId: number): string {
    return GlobalConstants.serverUrl + "image/" + imageId;
  }

  ngOnInit(): void {
    let t: string | null = sessionStorage.getItem("User");
    if (t != null) {
      this.user = JSON.parse(t);
    }
  }

}
