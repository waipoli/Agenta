import {Component, HostBinding, OnInit} from '@angular/core';
import {GlobalConstants} from "./global-constants";
import {FormControl} from "@angular/forms";
import {environment} from "../environments/environment";
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = GlobalConstants.title;

  constructor(public overlayContainer: OverlayContainer) {
  }
  @HostBinding('class') componentCssClass: string | undefined;

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add("light-theme");
    this.componentCssClass = "light-theme";
  }
}
