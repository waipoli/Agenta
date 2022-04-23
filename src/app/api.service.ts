import {Injectable} from '@angular/core';
import {WebRequestService} from "./web-request.service";
import {shareReplay, tap} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private webReqService: WebRequestService) {
  }

  login(name: string, password: string) {
    return this.webReqService.login(name, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
      })
    );
  }
  register(name: string, password: string) {
    return this.webReqService.register(name, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
      })
    );
  }
}
