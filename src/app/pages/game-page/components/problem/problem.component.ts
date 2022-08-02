import {Component, OnInit, Pipe, PipeTransform, ViewEncapsulation} from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';
import {Router} from "@angular/router";
import {GamesService} from "../../../../core/services/games.service";
import {Game, StateGame} from "../../../../core/models/game";

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProblemComponent implements OnInit {
  game: Game = {
    endDate: new Date(),
    htmlContent: "",
    id: 0,
    name: "",
    previewImageId: 0,
    state:StateGame.Hidden
  }

  id: string = "";

  constructor(private gamesService: GamesService, private _route: Router) {

  }


  ngOnInit(): void {
    this.id = this._route.url.split('/')[2]

    this.gamesService.getGame(this.id).subscribe((game: Game) => {
      this.game = game;
    });

  }
}
