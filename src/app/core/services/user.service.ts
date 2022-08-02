import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {Game} from "../models/game";
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "../../global-constants";
import {Observable} from "rxjs";
import {UserData} from "../models/userData";
import {PasswordChange} from "../models/passwordChange";
import {sha512} from "sha512-crypt-ts";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = GlobalConstants.serverUrl + 'user';

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<User> {
    let auth_token = sessionStorage.getItem('token')
    return this.http.get<User>(this.userUrl, {
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    });
  }

  updateUser(user: UserData): Observable<User> {
    let auth_token = sessionStorage.getItem('token')
    return this.http.patch<User>(this.userUrl, user, {
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    });
  }


  updatePassword(passwordChange:PasswordChange):Observable<string>{
    passwordChange.oldPassword = sha512.crypt(passwordChange.oldPassword, GlobalConstants.salt)
    passwordChange.newPassword = sha512.crypt(passwordChange.newPassword, GlobalConstants.salt)
    let auth_token = sessionStorage.getItem('token')
    return this.http.patch<string>(this.userUrl+'/password', passwordChange, {
      headers: {
        'Authorization': `Bearer ${auth_token}`
      }
    });
  }
}
