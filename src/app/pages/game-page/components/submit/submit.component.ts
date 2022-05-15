import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BotFormService } from 'src/app/core/services/bot-form.service';
import { BotService } from 'src/app/core/services/bot.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubmitComponent implements OnInit {

  fileSelected = "No file selected";
  language = new FormControl('c++');
  botForm: FormGroup = this.botFormService.botForm;

  constructor(private botFormService: BotFormService, private botService: BotService) { }

  ngOnInit(): void {
  }

  onFileSelected(evt: any): void {
    this.fileSelected = evt.target.files[0].name;
  }

  saveBot(): void {
    this.botService.upsertBot()
      .pipe(tap(d => console.log(d)))
      .subscribe();
  }
}
