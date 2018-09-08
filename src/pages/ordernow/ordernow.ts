import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrdernowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordernow',
  templateUrl: 'ordernow.html',
})

export class OrdernowPage {
  public showSearchBar = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  clickedSearchIcon(event: Event) {
    this.showSearchBar = !this.showSearchBar;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdernowPage');
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
