import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BotFormService} from 'src/app/core/services/bot-form.service';
import {BotService} from 'src/app/core/services/bot.service';
import {tap} from 'rxjs';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubmitComponent implements OnInit {

  fileSelected = "No file selected";
  file?: File;
  language = new FormControl('c++');
  botForm: FormGroup = this.botFormService.botForm;

  constructor(private botFormService: BotFormService, private botService: BotService,) {
  }

  ngOnInit(): void {
  }

  onFileSelected(evt: any): void {
    this.file = evt.target.files[0];
    this.fileSelected = evt.target.files[0].name;
  }

  saveBot(): void {
    if (this.file != null)
      this.botService.upsertBot(this.file)
        .pipe(tap(d => console.log(d)))
        .subscribe();
  }
}
