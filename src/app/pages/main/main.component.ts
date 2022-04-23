import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("isLogin") == "0") {
      this._router.navigate(["/login"]);
    }
  }

  getLogin(): string {
    // @ts-ignore
    return localStorage.getItem("name");
  }
}
