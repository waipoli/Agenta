import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() path?: string;
  @Input() id?: string;
  @Input() name?: string;
  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  goto(path: string): void {
    this._router.navigate([path + this.id + '/problem']);
  }
}
