import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginComponent } from './../pages/login/login.component';
import { RegisterComponent } from './../pages/register/register.component';
import { ForgotComponent } from './../pages/forgot/forgot.component';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginComponent;
  //rootPage:any = TabsPage;  
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }
}
