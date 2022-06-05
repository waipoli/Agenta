import {Component, Input, OnInit} from '@angular/core';
import {GlobalConstants} from "../../global-constants";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Game} from "../../core/models/game";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  title = GlobalConstants.title;
  @Input("Game") game?: Game;

  constructor(private router: Router, private _route: ActivatedRoute) {
  }

  taskId: string = ""

  ngOnInit(): void {
    this._route.params.subscribe(
      (params: Params) => {
        // @ts-ignore
        this.taskId = params.id;
      }
    )
  }


  isButtonSelected(buttonName: string): boolean {
    return buttonName === this.router.url.replace('/game/' + this.taskId + '/', '');
  }
}
