import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MonoTypeOperatorFunction, Observable} from 'rxjs';
import {BotFormService} from './bot-form.service';
import {GlobalConstants} from "../../global-constants";
import { Champion } from '../models/champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  pipe(arg0: MonoTypeOperatorFunction<unknown>) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {
  }

  getChampions(gameId: number): Observable<Champion[]> {
    let auth_token = sessionStorage.getItem('token')
    return this.http.get<Champion[]>(GlobalConstants.serverUrl + '/game/' + gameId.toString() + 'standings', {
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    });
  }
}
