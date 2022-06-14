import {Component, OnInit} from '@angular/core';
import {Game} from 'src/app/core/models/game';
import {GamesService} from 'src/app/core/services/games.service';
import {tap} from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  images = ['./assets/images/chess.jpg', './assets/images/tictactoe.jpg', './assets/images/gi.png'];

  games: Game[] = [];

  constructor(private gamesService: GamesService) {
  }

  counter(i: number) {
    return new Array(i);
  }

  ngOnInit(): void {
    this.gamesService.getGames()
      .pipe(tap(g => console.log(g)))
      .subscribe((data: Game[]) => {
        this.games = data;
        // localStorage.setItem("games", JSON.stringify(this.games));
      });
  }

}
