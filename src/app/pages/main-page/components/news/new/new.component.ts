import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import { Input } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  @Input() Title?: string;
  @Input() Content?: string;

  constructor(private _router: Router) {
  }

  text = "<button></button>"
  // @ts-ignore
  @ViewChild('new') sidebar: ElementRef;

  ngOnInit(): void {
  }

  isOpen: boolean = false;

  click(): void {
    this.isOpen = !this.isOpen;

  }
}
