import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Champion} from 'src/app/core/models/champion';
import {ChampionService} from 'src/app/core/services/champion.service';
import {GamesService} from "../../../../core/services/games.service";
import {Game, StateGame} from "../../../../core/models/game";
import {BotService} from "../../../../core/services/bot.service";

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  champions: Champion[] = new Array<Champion>();
  game: Game = {
    endDate: new Date(),
    htmlContent: "",
    id: 0,
    name: "",
    previewImageId: 0,
    state:StateGame.Hidden
  }
  constructor(private championService: ChampionService, private botServices: BotService, private _route: Router, private gameService: GamesService) {

  }

  ngOnInit(): void {
    let id: number = Number(this._route.url.split('/')[2])
    this.gameService.getGame(id.toString()).subscribe((game: Game) => {
      this.game = game;
    });

    this.championService.getChampions(id).subscribe((res: Champion[]) => {
      this.champions = res;
    })


    // this.champions.forEach(function (value){

    // })
  }

}
