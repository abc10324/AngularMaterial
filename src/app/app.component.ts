import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { LoginServce } from './service/login-servce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents:[
    LoginComponent,
    MainpageComponent
  ]
})
export class AppComponent{
  title = 'Iot Management System';
  currentModule = 'Login';
  isLogin = false;


  mapping = new Map<string,any>([
    ['Login',LoginComponent],
    ['Mainpage',MainpageComponent]
  ]);
  
  constructor(private loginService: LoginServce){
    this.loginService.loginStatus.subscribe((loginStatus :boolean) => {
      console.log("loginStatus = " + loginStatus);
      this.isLogin = loginStatus;

      if(this.isLogin){
        this.currentModule = 'Mainpage';
      } else {
        this.currentModule = 'Login';
      }
    });
  }

  changeModule(moduleName : string){
    if(this.isLogin){
      this.currentModule = moduleName;
    } else {
      this.currentModule = 'Login';
    }
  }

  isHideNav(){
    return !this.isLogin;
  }

  logout(){
    this.loginService.logout();
  }

}

