import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';
import {PipeTransform, Pipe} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GamesService} from "../../../../core/services/games.service";
import {Game} from "../../../../core/models/game";

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
    previewImageId: 0
  }

  constructor() {

  }


  ngOnInit(): void {
    setInterval(() => {
      var game = sessionStorage.getItem('game');
      if (game != null)
        this.game = JSON.parse(game);
    }, 10)

  }

}
