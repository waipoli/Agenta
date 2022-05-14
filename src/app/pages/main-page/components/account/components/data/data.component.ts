import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  @Input() text?: string;
  @Input() defaultText?: string;
  isEdit: boolean | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.isEdit = false;
  }

  getText(): string {
    if (this.text == null || this.text == "") {
      if (this.defaultText != null)
        return this.defaultText;
      else return "";
    } else return this.text;
  }
}
