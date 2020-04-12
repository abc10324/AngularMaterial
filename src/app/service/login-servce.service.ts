import { Injectable, Output, EventEmitter } from '@angular/core';
import { ConstantService } from './constant.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServce {

  @Output() loginStatus = new EventEmitter<boolean>();

  constructor(private httpClient: HttpClient,private constantService :ConstantService) { }

  login(user: User){
    let loginUrl = this.constantService.getLoginUrl();
    let httpOptions = this.constantService.getHttpOptions();

    this.httpClient.post(loginUrl,user,httpOptions)
               .subscribe( result => {
                 console.log(result);
                 console.log(result['status']);
                 this.loginStatus.emit(result['status'] as boolean);
               },
               error => {
                 console.log(error);
                 console.log(error['status']);
                 console.log(error['message']);
               });
  }

  genUser(userName: string,password: string){
    return new User(userName,password);
  }

}

class User {
  userName: string;
  password: string;

  constructor(userName: string, password: string){
    this.userName = userName;
    this.password = password;
  }
}

// const loginUrl = "http://localhost:8080/login";

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': '1qaz@WSX'
//   })
// };
