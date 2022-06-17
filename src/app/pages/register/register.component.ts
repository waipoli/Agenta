import {Component, OnInit} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {GlobalConstants} from "../../global-constants";
import {RegisterService} from "../../core/services/register.service";
import {User} from "../../core/models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = GlobalConstants.title;

  constructor(private _registerService: RegisterService) {
  }

  ngOnInit(): void {
  }

  register(name: string, email: string, password: string, password_check: string) {
    if (password != password_check) {
      console.log("Password doesn't match!!!")
      return
    }
    if (password_check == "") {
      console.log("Password to easy!!!");
      return;
    }
    if (name == "") {
      console.log("Username must be not empty");
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
      id: 0
    }

    if (this._registerService.register(user)) {
      console.log("Success!!!")
    } else {
      console.log("Error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    }


    // this.api.register(name, password).subscribe((req: HttpResponse<any>) => {
    //   if (req.body.register != 0) {
    //     console.log("Successfully register!!!");
    //   } else {
    //     console.log("this name already used((");
    //   }
    // });
  }
}
