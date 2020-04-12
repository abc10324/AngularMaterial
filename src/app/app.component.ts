import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginServce } from './service/login-servce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents:[
    LoginComponent
  ]
})
export class AppComponent{
  title = 'Iot Management System';
  currentModule = 'Login';
  showNav = false;


  mapping = new Map<string,any>([
    ['Login',LoginComponent]
  ]);
  
  constructor(private loginService: LoginServce){
    this.loginService.loginStatus.subscribe((loginStatus :boolean) => {
      console.log("loginStatus = " + loginStatus);
      this.showNav = loginStatus;
    });
  }

  changeModule(moduleName : string){
    this.currentModule = moduleName;
  }

}

