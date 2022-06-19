import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  @Input() text!: string;
  @Output() textChange = new EventEmitter();

  @Input() defaultText?: string;
  isEdit: boolean | undefined;
  @Input() isDate: boolean | undefined;


  constructor() {
  }

  changeState() {
    this.isEdit = !this.isEdit;
    this.textChange.emit(this.text)
  }

  ngOnInit(): void {
    this.isEdit = false;
    if (this.isDate == null) {
      this.isDate = false;
    }

  }

  getText(): string {
    if (this.text == null || this.text == "") {
      if (this.defaultText != null)
        return this.defaultText;
      else return "";
    } else return this.text;
  }
}
