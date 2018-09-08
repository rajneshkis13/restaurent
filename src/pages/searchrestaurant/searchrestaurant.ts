import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Keyboard } from 'ionic-angular';



/**
 * Generated class for the SearchrestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchrestaurant',
  templateUrl: 'searchrestaurant.html',
})
export class SearchrestaurantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private keyboard: Keyboard) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchrestaurantPage');
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    // this.nav.setRoot(page);
    //this.active = page;
    this.navCtrl.push(page);
  }
}
