import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllserviceProvider } from "../../providers/allservice/allservice";
import { HelperProvider } from "../../providers/helper/helper";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  password:string;
  email:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public allservice:AllserviceProvider,public helper:HelperProvider) {
  this.email = '';
  this.password='';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openPage(page) {
    // this.active = page;
    this.navCtrl.push(page);
  } 

  login(){
    if (this.email =='' || this.password =='') {
      this.helper.simpleToast('please fill above details');
      return;
    }
      let data = {
        "method":"login",
        "email":this.email,
        "password":this.password,
        "from":"customer"
      } 
      this.helper.showSpinner();
      this.allservice.call(data).subscribe(res => {
            this.helper.hideSpinner();
        },
        err => {
            this.helper.handleRequestError(err);
        }
    );
  }
}
