import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { LoginComponent } from '../../pages/login/login.component';
import { ForgotComponent } from '../../pages/forgot/forgot.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
 
  public gotoRegister() {
     console.log("TabsPage");
    this.navCtrl.push(TabsPage);
  }
   public gotoLogin() {
    this.navCtrl.push(LoginComponent);
  }
  public gotoForgot() {   
    this.navCtrl.push(ForgotComponent);
  }
  goBack() {
    this.navCtrl.pop();
  }

}