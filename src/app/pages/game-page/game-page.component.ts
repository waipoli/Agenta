import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from "../../global-constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  title = GlobalConstants.title;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goto(path: string) {
    this.router.navigate([path])
  }
}
