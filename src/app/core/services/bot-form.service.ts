import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bot } from '../models/bot';

@Injectable({
  providedIn: 'root'
})
export class BotFormService {
  botForm: FormGroup;

  constructor() {
    this.botForm = this.createFormGroup()
  }

  private createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      language: new FormControl('', Validators.required)
    });
  }

  public getBotFromForm(): Bot {
    const result: Bot = {
      gameId: 0,
      userId: 0,
      name: this.botForm?.get('name')?.value,
      language: this.botForm?.get('language')?.value
    };

    return result;
  }
}
