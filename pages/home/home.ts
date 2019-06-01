import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginComponent } from '../../pages/login/login.component';
import { DetailsComponent } from '../../pages/details/details.component';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items = [
    {
      id: 1,
      name: "Pradeep",
      about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"
    },
    {
      id: 2,
      name: "Aashish",
      about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"
    },
    {
      id: 3,
      name: "Geetika",
      about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"
    },
    {
      id: 4,
      name: "Swara",
      about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a"
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  public gotoLogout() {
    this.navCtrl.push(LoginComponent);
  }
  public itemSelected(item) {
    this.navCtrl.push(DetailsComponent, {
      name:item.name,
      about:item.about
    });
  }

}
