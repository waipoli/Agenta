import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "../../global-constants";
import {User} from "../models/user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl = GlobalConstants.serverUrl + 'register';

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<String> {
    return this.http.put<String>(this.registerUrl, user);
  }

}
