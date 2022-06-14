import {Component, Input, OnInit} from '@angular/core';
import {GlobalConstants} from "../../global-constants";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Game} from "../../core/models/game";
import {GamesService} from "../../core/services/games.service";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  title = GlobalConstants.title;
  @Input("Game") game?: Game;

  constructor(private gamesService: GamesService, private router: Router, private _route: ActivatedRoute) {
  }

  endDate: Date = new Date();
  leftTime: string = "";
  id: string = ""

  ngOnInit(): void {
    this._route.params.subscribe(
      (params: Params) => {
        // @ts-ignore
        this.id = params.id;
      }
    )


    this.gamesService.getGame(this.id).subscribe((game: Game) => {
      // this.title = game.name;
      this.endDate = new Date(game.endDate);
      // console.log(typeof  game.endDate)

    });

    setInterval(() => {
      var time: number = this.endDate.getTime() - Date.now();
      time /= 1000;
      time = Math.round(time);
      var D = Math.floor(time / (3600*24));
      var H = Math.floor(time % (3600*24) / 3600);
      var M = Math.floor(time % 3600 / 60);
      var S = Math.floor(time % 60);
      D = Math.round(D)
      H = Math.round(H)
      M = Math.round(M)
      S = Math.round(S)
      console.log(D, H, M, S)
      this.leftTime = D + ':' + (Math.floor(H / 10)).toString() + (H % 10).toString() + ':' + (Math.floor(M / 10)).toString() + (M % 10).toString() + ':' + (Math.floor(S / 10)).toString() + (S % 10).toString();
    }, 1000);


  }


  isButtonSelected(buttonName: string): boolean {
    return buttonName === this.router.url.replace('/game/' + this.id + '/', '');
  }
}
