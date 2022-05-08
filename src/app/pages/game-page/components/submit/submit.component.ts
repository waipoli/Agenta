import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  fileSelected = "No file selected";

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(evt: any): void {
    this.fileSelected = evt.target.files[0].name;
  }
}
