import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  private loginUrl = "http://localhost:8080/login";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': '1qaz@WSX'
    })
  };

  getLoginUrl(){ return this.loginUrl }
  getHttpOptions(){ return this.httpOptions }

}
