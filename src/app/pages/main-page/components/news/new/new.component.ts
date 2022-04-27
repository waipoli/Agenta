import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private _router: Router) {
  }

  id: string = "132";

  ngOnInit(): void {
  }

  click(): void {
    this._router.navigate(["/new/" + this.id])
  }
}
