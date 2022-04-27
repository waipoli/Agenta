import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsCount = 50;

  constructor() {
  }

  counter(i: number) {
    return new Array(i);
  }

  ngOnInit(): void {
  }

}
