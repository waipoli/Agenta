import {Component, Input, OnInit} from '@angular/core';
import {GlobalConstants} from "../../global-constants";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Game} from "../../core/models/game";
import {GamesService} from "../../core/services/games.service";
import { ChampionService } from 'src/app/core/services/champion.service';
import { Champion } from 'src/app/core/models/champion';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  title = GlobalConstants.title;
  game: Game = {
    endDate: new Date(),
    htmlContent: "",
    id: 0,
    name: "",
    previewImageId: 0
  };

  championsLength: number = 0;

  constructor(private championService: ChampionService, private gamesService: GamesService, private router: Router, private _route: ActivatedRoute) {
  }

  leftTime: string = "";
  id: string = ""

  ngOnInit(): void {
    if (sessionStorage.getItem("token") == null) {
      this.router.navigate(["/login"]);
      return;
    }

    this._route.params.subscribe(
      (params: Params) => {
        // @ts-ignore
        this.id = params.id;
      }
    )

    let id: number = Number(this.router.url.split('/')[2])

    this.championService.getChampions(id).subscribe((res: Champion[]) => {
      this.championsLength = res.length;
    })

    this.gamesService.getGame(this.id).subscribe((game: Game) => {
      this.game = game;
      this.game.endDate = new Date(game.endDate);
      this.updateTime();
   });
    this.updateTime();

    setInterval(() => {
        this.updateTime();
      }
      ,
      1000
    );
  }

  updateTime() {
    if (this.game != null) {
      var time: number = this.game.endDate.getTime() - Date.now();
      time /= 1000;

      time = Math.round(time);
      var D = Math.floor(time / (3600 * 24));
      var H = Math.floor(time % (3600 * 24) / 3600);
      var M = Math.floor(time % 3600 / 60);
      var S = Math.floor(time % 60);
      D = Math.round(D)
      H = Math.round(H)
      M = Math.round(M)
      S = Math.round(S)
      console.log(this.game.endDate.getTime())
      this.leftTime = " Game ends in " + D + ':' + (Math.floor(H / 10)).toString() + (H % 10).toString() + ':' + (Math.floor(M / 10)).toString() + (M % 10).toString() + ':' + (Math.floor(S / 10)).toString() + (S % 10).toString();
      if (time < 0) {
        this.leftTime = " Game is over";
      }
    }
  }

  isButtonSelected(buttonName: string): boolean {
    return buttonName === this.router.url.replace('/game/' + this.id + '/', '');
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["/"])
  }
}
