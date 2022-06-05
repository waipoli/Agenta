import {Component, OnInit, ViewEncapsulation} from '@angular/core';

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
  content = "";
  title = "";

  constructor(private gamesService: GamesService, private router: Router) {

  }

  id: string = ""

  ngOnInit(): void {
    this.id = this.router.url.split("/")[2];

    this.gamesService.getGame(this.id).subscribe((game: Game) => {
      this.content = game.htmlContent;
      this.title = game.name;
    });
    // let g:GamesService = new GamesService()
    // g.getGame(this.id);
    // GamesService
  }

}
