import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "../../global-constants";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl = GlobalConstants.serverUrl + 'register';

  constructor(private http: HttpClient) {
  }

  register(user: User): boolean {
    let success: boolean = false;
    this.http.put(this.registerUrl, user).subscribe({
      next: res => {
        success = true;
      },
      error: err => {
        console.error('There was an error!', err.message);
        success = false;
      }
    });

    return success;
  }

}
