import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public name:string;
  public about:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get("name");
    this.about = navParams.get("about");
  }
  ngOnInit() {
  }

}