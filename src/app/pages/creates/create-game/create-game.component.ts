import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  html = '';
  fileSelected = "Otprav Sudiu";

  constructor() { }

  onFileSelected(evt: any): void {
    this.fileSelected = evt.target.files[0].name;
  }
  ngOnInit(): void {
  }

}
