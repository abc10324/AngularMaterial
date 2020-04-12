import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginStatus = new EventEmitter<boolean>();

  user = {
    serailNo: 0,
    userName: '',
    password: ''
  }

  

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  login(formData :NgForm){
    this.user.userName = formData.value.username;
    this.user.password = formData.value.password;

    console.log(this.user);

    this.sendLoginRequest();
  }

  sendLoginRequest(){
    this.httpClient.post('http://localhost:8080/login',this.user,httpOptions)
               .subscribe( result => {
                 console.log(result);
                 console.log(result['status']);
                 this.loginStatus.emit(result['status']);
               },
               error => {
                 console.log(error);
                 console.log(error['status']);
                 console.log(error['message']);
               });
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': '1qaz@WSX'
  })
};