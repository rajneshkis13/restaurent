import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetpasswordPage } from "../resetpassword/resetpassword";
import { AllserviceProvider } from "../../providers/allservice/allservice";
import { HelperProvider } from "../../providers/helper/helper";
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  mobile:string;
  realotp:string;
  applyotp:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public helper:HelperProvider,public allservice:AllserviceProvider) {
  this.mobile='';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }
  sendOtp(){
    if (this.mobile =='') {
      this.helper.simpleToast('Please fill mobile number');
      return;
    }
    
    let data = {
      "method":"send_opt",
      "from" 	: "customer",// restaurant 
      "mobile_number":this.mobile
    }
    
    this.helper.showSpinner();
    this.allservice.call(data).subscribe(res => {
        this.helper.hideSpinner();
        if (res.status == 200) {
          this.realotp = res.result;
        }else{
          this.helper.simpleToast(res.result);
        }
      },
      err => {
        this.helper.handleRequestError(err);
      }
    );
  }
  
  validateOtp(){
    if (this.applyotp == this.realotp) { 
      this.navCtrl.push('ResetpasswordPage');
    }
  }
}
