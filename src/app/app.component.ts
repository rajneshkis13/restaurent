import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AllserviceProvider } from "../providers/allservice/allservice";
import { SearchrestaurantPage } from '../pages/searchrestaurant/searchrestaurant';
import { HelperProvider } from '../providers/helper/helper';
@Component({
  templateUrl: 'app.html',
  providers : [AllserviceProvider,HelperProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SearchrestaurantPage;
  active:any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public allservice:AllserviceProvider) {
    this.initializeApp();
    // this.active = 'WelcomePage';
    // used for an example of ngFor and navigation
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.active = page;
    if (page == 'SearchrestaurantPage') {
      this.rootPage = page;
    } else {
      this.nav.push(page);
    }
  }
}
