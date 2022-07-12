import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from 'src/app/core/models/champion';
import { ChampionService } from 'src/app/core/services/champion.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  champions: Champion[] = new Array<Champion>();

  constructor(private championService: ChampionService, private _route: Router) {

   }

  ngOnInit(): void {
    let id: number = Number(this._route.url.split('/')[2])

    this.championService.getChampions(id).subscribe((res: Champion[]) => {
      this.champions = res;
    })
  }

}
