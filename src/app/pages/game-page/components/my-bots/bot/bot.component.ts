import {Component, Input, OnInit} from '@angular/core';
import {State} from "../../../../../core/models/bot";

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


  constructor() {
  }

  ngOnInit(): void {
  }

}
