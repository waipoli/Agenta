import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bot} from '../models/bot';

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
    let user = sessionStorage.getItem('User')
    let game = sessionStorage.getItem('game')
    if (user == null || game == null) {
      // error
      console.error("NULL USER OR GAME!!!");
      return {
        id: 0,
        userId: 0,
        gameId: 0,
        name: "",
        language: ""
      };
    }
    const result: Bot = {
      gameId: JSON.parse(game).id,
      userId: JSON.parse(user).id,
      name: this.botForm?.get('name')?.value,
      language: this.botForm?.get('language')?.value
    };

    return result;
  }
}
