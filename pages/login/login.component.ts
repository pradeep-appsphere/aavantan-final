import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { RegisterComponent } from '../../pages/register/register.component';
import { ForgotComponent } from '../../pages/forgot/forgot.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  public gotoLogin() {
     console.log("TabsPage");
    this.navCtrl.push(TabsPage);
  }
  public gotoRegister() {
    this.navCtrl.push(RegisterComponent);
  }
  public gotoForgot() {   
    this.navCtrl.push(ForgotComponent);
  }
  goBack() {
    this.navCtrl.pop();
  }

}