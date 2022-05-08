import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/global-constants';
@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {
  title = GlobalConstants.title;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  isButtonSelected(buttonName: string): boolean {
    return buttonName === this.router.url.replace('/', '').split('/')[0];
  }
}
