import {Component, OnInit} from '@angular/core';
import {APIService} from "../../api.service";
import {HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {GlobalConstants} from "../../global-constants";

// import * as Console from "console";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title: String = GlobalConstants.title;

  constructor(private _api: APIService, private _router: Router) {
  }


  ngOnInit(): void {

  }

  try_sign_in(name: string, password: string) {
    this._api.login(name, password).subscribe((res: HttpResponse<any>) => {
      localStorage.setItem("isLogin", res.body.login);
      if (localStorage.getItem("isLogin") == "1") {
        localStorage.setItem("name", name);
        console.log("Log In");
        this._router.navigate(["/main-page"]);
      } else {
        localStorage.removeItem("name");
        localStorage.setItem("isLogin", "1");
        console.log("Doesnt Match");
      }
    })
  }
}
