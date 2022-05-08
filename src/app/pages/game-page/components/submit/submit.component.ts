import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubmitComponent implements OnInit {

  fileSelected = "No file selected";
  language = new FormControl('c++');
  
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(evt: any): void {
    this.fileSelected = evt.target.files[0].name;
  }
}
