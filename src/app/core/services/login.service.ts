import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {GlobalConstants} from "../../global-constants";
import {shareReplay, tap} from "rxjs";
import {UserLogin} from "../models/userLogin";
import {Response} from "../models/Response";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = GlobalConstants.serverUrl + 'login';

  constructor(private http: HttpClient) {
  }

  login(user: UserLogin): boolean {
    this.http.post<Response>(this.loginUrl, user,
      {observe: "response"}
    ).subscribe({
      next: res => {
        if (res.body?.token != null)
          sessionStorage.setItem("token", res.body?.token);
      },
      error: err => {
        console.error('There was an error!', err.message);
      }
    })
    return false;
  }

  refresh(): boolean {

    let auth_token = sessionStorage.getItem('token')
    this.http.get<Response>(this.loginUrl + '/refresh',
      {
        observe: "response",
        headers: {
          'Authorization': `Bearer ${auth_token}`
        }
      }
    ).subscribe({
      next: res => {
        if (res.body?.token != null)
          sessionStorage.setItem("token", res.body?.token);
      },
      error: err => {
        console.error('There was an error!', err.message);
      }
    })
    return false;
  }

}
