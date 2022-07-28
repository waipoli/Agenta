import {Component, Input, OnInit} from '@angular/core';
import {State} from "../../../../../core/models/bot";
import {BotService} from "../../../../../core/services/bot.service";

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {
  @Input() name = 'ElMishucha';
  @Input() language = 'C++';
  @Input() date = '3 days ago';
  @Input() state: State = State.Unverified;
  @Input() id: number | undefined;

  constructor(private _botService: BotService) {
  }

  ngOnInit(): void {
  }

  delete() {
    if (this.id != null)
      this._botService.deleteBot(this.id).subscribe(req => {
        console.log(req)
      });
  }
}
