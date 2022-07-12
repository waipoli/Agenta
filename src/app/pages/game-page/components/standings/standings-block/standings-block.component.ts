import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standings-block',
  templateUrl: './standings-block.component.html',
  styleUrls: ['./standings-block.component.scss']
})
export class StandingsBlockComponent implements OnInit {
  @Input() num: number = 0;
  @Input() nickname?: string;
  @Input() score?: number;
  @Input() time?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
