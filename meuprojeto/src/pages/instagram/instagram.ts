import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
 
@IonicPage({
  name: 'instagram'
})
@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
})
export class InstagramPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstagramPage');
  }

}
