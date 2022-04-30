import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsCount = 50;

  constructor(private router: Router) {

  }

  counter(i: number) {
    return new Array(i);
  }

  ngOnInit(): void {
  }

}
