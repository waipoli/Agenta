import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bot} from '../models/bot';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BotFormService {
  botForm: FormGroup;

  constructor(private _route: Router) {
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

    if (user == null) {
      // error
      console.error("NULL USER!!!");
      return {
        id: 0,
        userId: 0,
        gameId: 0,
        name: "",
        language: ""
      };
    }
    let id: number = Number(this._route.url.split('/')[2])

    const result: Bot = {
      gameId: id,
      userId: JSON.parse(user).id,
      name: this.botForm?.get('name')?.value,
      language: this.botForm?.get('language')?.value
    };

    return result;
  }
}
