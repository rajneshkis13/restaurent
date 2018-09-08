import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule,Http } from "@angular/http";;
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Toast } from "@ionic-native/toast";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SearchrestaurantPage } from '../pages/searchrestaurant/searchrestaurant';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AllserviceProvider } from '../providers/allservice/allservice';
import { HelperProvider } from '../providers/helper/helper';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchrestaurantPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SearchrestaurantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    SpinnerDialog,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AllserviceProvider,
    HelperProvider
  ]
})
export class AppModule {}
