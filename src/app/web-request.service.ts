import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:5000";
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`)
  }

  login(name: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users/login`, {
      name,
      password
    }, {
      observe: `response`
    });
  }

  register(name: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users/register`, {
      name,
      password
    }, {
      observe: `response`
    });
  }
}
