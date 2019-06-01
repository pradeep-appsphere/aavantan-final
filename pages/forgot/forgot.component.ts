import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterComponent } from '../../pages/register/register.component';
import { LoginComponent } from '../../pages/login/login.component';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  public gotoLogin() {
    this.navCtrl.push(LoginComponent);
  }
  public gotoRegister() {
    this.navCtrl.push(RegisterComponent);
  }
  public gotoForgot() {
    console.log("gotoForgot");
  }

}