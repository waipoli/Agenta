import {Component, OnInit} from '@angular/core';
import {Bot} from "../../../../core/models/bot";
import {BotService} from "../../../../core/services/bot.service";
import {Game} from "../../../../core/models/game";

@Component({
  selector: 'app-my-bots',
  templateUrl: './my-bots.component.html',
  styleUrls: ['./my-bots.component.scss']
})
export class MyBotsComponent implements OnInit {
  Bots: Bot[] = new Array<Bot>();

  constructor(private _botService: BotService) {
  }

  ngOnInit(): void {

    setInterval(() => {
      let x: string = ""
      // @ts-ignore
      x = sessionStorage.getItem("game")

      let game: Game = JSON.parse(x);
      this._botService.getBots(game.id).subscribe((res: Bot[]) => {
        this.Bots = res;
      })
    }, 10)

  }

}
