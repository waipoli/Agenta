import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  gamesCount = 50;

  constructor() {
  }
  counter(i: number) {
    return new Array(i);
  }
  ngOnInit(): void {
  }

}
