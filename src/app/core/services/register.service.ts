import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "../../global-constants";
import {User} from "../models/user";
import { Observable } from 'rxjs';
import {sha512} from "sha512-crypt-ts";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl = GlobalConstants.serverUrl + 'register';

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<String> {
    user.password = sha512.crypt(user.password, GlobalConstants.salt)
    return this.http.put<String>(this.registerUrl, user);
  }

}
