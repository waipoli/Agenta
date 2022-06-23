import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MonoTypeOperatorFunction, Observable} from 'rxjs';
import {BotFormService} from './bot-form.service';
import {GlobalConstants} from "../../global-constants";
import {Bot} from "../models/bot";

@Injectable({
  providedIn: 'root'
})
export class BotService {
  pipe(arg0: MonoTypeOperatorFunction<unknown>) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private botFormService: BotFormService) {
  }

  botUrl = GlobalConstants.serverUrl + "bots"

  upsertBot(file: File): Observable<string> {

    let formData: FormData = new FormData();
    formData.append("data", JSON.stringify(this.botFormService.getBotFromForm()));
    formData.append("file", file);
    let auth_token = sessionStorage.getItem('token')
    return this.http.put<string>(this.botUrl+"/upsert", formData, {
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    });
  }

  getBots(gameId: number): Observable<Bot[]> {
    let auth_token = sessionStorage.getItem('token')
    return this.http.get<Bot[]>(this.botUrl + '/' + gameId.toString(), {
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    });
  }
}
