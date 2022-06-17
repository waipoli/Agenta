import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalConstants} from 'src/app/global-constants';
import {User} from "../../../../core/models/user";

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {
  title = GlobalConstants.title;
  user: User = {
    id: 0,
    name: "",
    username: "",
    email:"",
    birthdayDay: new Date(),
    country: "",
    details: "",
    password:""
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let t: string | null = sessionStorage.getItem("User");
    if (t != null) {
      this.user = JSON.parse(t);
    }
  }

  isButtonSelected(buttonName: string): boolean {
    return buttonName === this.router.url.replace('/', '').split('/')[0];
  }
}
