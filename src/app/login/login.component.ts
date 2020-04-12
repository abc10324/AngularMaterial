import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServce } from '../service/login-servce.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private loginService: LoginServce) { }

  login(formData :NgForm){
    let username = formData.value.username;
    let password = formData.value.password;

    let user = this.loginService.genUser(username,password);
    console.log(user);

    this.loginService.login(user);
  }

}