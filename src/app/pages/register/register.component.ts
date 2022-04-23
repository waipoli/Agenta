import {Component, OnInit} from '@angular/core';
import {APIService} from "../../api.service";
import {HttpResponse} from "@angular/common/http";
import {GlobalConstants} from "../../global-constants";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = GlobalConstants.title;

  constructor(private api: APIService) {
  }

  ngOnInit(): void {
  }

  register(name: string, password: string, password_check: string) {
    if (password != password_check) {
      console.log("Password doesn't match!!!")
      return
    }
    if (password_check == "") {
      console.log("Password to easy!!!");
      return;
    }
    if (name == "") {
      console.log("username must be not empty");
      return;
    }
    this.api.register(name, password).subscribe((req: HttpResponse<any>) => {
      if (req.body.register != 0) {
        console.log("Successfully register!!!");
      } else {
        console.log("this name already used((");
      }
    });
  }
}
