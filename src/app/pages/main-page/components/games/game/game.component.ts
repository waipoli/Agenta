import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {Router} from "@angular/router";
import {GlobalConstants} from "../../../../../global-constants";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() imageId?: string;
  @Input() id?: string;
  @Input() name?: string;

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  getPath(): string {
    console.log(GlobalConstants.serverUrl+"image/"+this.imageId)
    return GlobalConstants.serverUrl+"image/"+this.imageId;
  }

  goto(path: string): void {
    this._router.navigate([path + this.id + '/problem']);
  }
}
