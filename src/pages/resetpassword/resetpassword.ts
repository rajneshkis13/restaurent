import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllserviceProvider } from "../../providers/allservice/allservice";
import { HelperProvider } from "../../providers/helper/helper";
/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
  newpassword:string;
  confirmpassword:string;
  mobile:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public helper:HelperProvider,public allservice:AllserviceProvider) {
    this.newpassword='';
    this.confirmpassword = '';
    this.mobile = this.navParams.get('mobile');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }
  openPage(page) 
  {
    if (this.newpassword =='' || this.confirmpassword == '') 
    {
      this.helper.simpleToast('please fill above details');
      return;
    }
    if(this.newpassword == this.confirmpassword)
    {
      let data = {
        "method"  : "confirm_password",
        "from" 	  : "customer",		// restaurant 
        "mobile_number"  : this.mobile,
        "password": this.newpassword
      }
      this.helper.showSpinner();
      this.allservice.call(data).subscribe(res => {
        this.helper.hideSpinner();
        if (res.status == 200) {
          this.helper.simpleToast(res.result);
          this.navCtrl.push(page);
        }else{
          this.helper.simpleToast(res.result);
        }
      },
      err => {
        this.helper.handleRequestError(err);
      }
    );
      
    }
    else
    {
      this.helper.simpleToast('Password and Confirm password not match');
      return;
    }
    
  } 

}
