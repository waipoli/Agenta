import {Component, OnInit} from '@angular/core';
import {Game} from 'src/app/core/models/game';
import {GamesService} from 'src/app/core/services/games.service';
import {tap} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(private router: Router, private gamesService: GamesService) {
  }

  counter(i: number) {
    return new Array(i);
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("token") == null) {
      this.router.navigate(["/login"]);
      return;
    }

    this.gamesService.getGames()
      .pipe(tap(g => console.log(g)))
      .subscribe((data: Game[]) => {
        this.games = data;
      });
  }

}
