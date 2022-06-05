import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../models/game';
import {GlobalConstants} from "../../global-constants";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  gamesListUrl = GlobalConstants.serverUrl + 'games';

  constructor(private http: HttpClient) {
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesListUrl);
  }

  getGame(id: string): Observable<Game> {
    return this.http.get<Game>(this.gamesListUrl + '/' + id);
  }
}
