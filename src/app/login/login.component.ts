import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginStatus = new EventEmitter<boolean>();

  user = {
    serailNo: 0,
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(formData :NgForm){
    this.user.username = formData.value.username;
    this.user.password = formData.value.password;

    console.log(this.user);

    this.loginStatus.emit(this.user.username == 'abc10324' && this.user.password == 'abc9814016');
  }
}
