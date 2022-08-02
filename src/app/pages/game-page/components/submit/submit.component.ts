import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BotFormService} from 'src/app/core/services/bot-form.service';
import {BotService} from 'src/app/core/services/bot.service';
import {Game, StateGame} from "../../../../core/models/game";
import {Router} from "@angular/router";
import {GamesService} from "../../../../core/services/games.service";

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubmitComponent implements OnInit {

  fileSelected = "No file selected";
  file?: File;
  language = new FormControl('c++');
  botForm: FormGroup = this.botFormService.botForm;
  game: Game = {
    endDate: new Date(),
    htmlContent: "",
    id: 0,
    name: "",
    previewImageId: 0,
    state:StateGame.Hidden
  }

  constructor(private botFormService: BotFormService, private botService: BotService, private _route: Router, private gameService: GamesService) {
  }

  ngOnInit(): void {
    let id = this._route.url.split('/')[2]

    this.gameService.getGame(id).subscribe((game: Game) => {
      this.game = game;
    });

  }

  onFileSelected(evt: any): void {
    this.file = evt.target.files[0];
    this.fileSelected = evt.target.files[0].name;
  }

  saveBot(): void {
    if (this.file == null) {
      return;
    }
    let url = this._route.url.split('/');
    url.pop();
    let url_str = "";
    url.forEach(element => {
      url_str += element + '/';
    });

    url_str += 'my-submission'

    this._route.navigate([url_str]);
    this.botService.upsertBot(this.file).subscribe();
  }
}
