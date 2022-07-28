import {Component, OnInit} from '@angular/core';
import {Bot} from "../../../../core/models/bot";
import {BotService} from "../../../../core/services/bot.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-bots',
  templateUrl: './my-bots.component.html',
  styleUrls: ['./my-bots.component.scss']
})
export class MyBotsComponent implements OnInit {
  Bots: Bot[] = new Array<Bot>();

  constructor(private _botService: BotService, private _route: Router) {
  }

  ngOnInit(): void {

    let id: number = Number(this._route.url.split('/')[2])


    this._botService.getBots(id).subscribe((res: Bot[]) => {
      this.Bots = res;
    })

    setInterval(() => {
        this._botService.getBots(id).subscribe((res: Bot[]) => {
          this.Bots = res;
        })
      },
      1000)
  }

}
