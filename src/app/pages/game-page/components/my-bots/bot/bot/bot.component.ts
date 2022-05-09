import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {
  name = 'ElMishucha';
  language = 'C++';
  date = '3 days ago';
  
  constructor() { }

  ngOnInit(): void {
  }

}
