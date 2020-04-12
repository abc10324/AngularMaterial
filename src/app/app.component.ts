import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

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
  
  changeModule(moduleName : string){
    this.currentModule = moduleName;
  }

  onLogin(loginStatus: boolean){
    this.showNav = loginStatus;
  }
  
}

