import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { BotFormService } from './bot-form.service';

@Injectable({
  providedIn: 'root'
})
export class BotService {
  pipe(arg0: MonoTypeOperatorFunction<unknown>) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private botFormService: BotFormService) { }

  saveBotUrl = "https://localhost:5001/bots/upsert"

  upsertBot(): Observable<number> {
    return this.http.put<number>(this.saveBotUrl, this.botFormService.getBotFromForm());
  }
}
