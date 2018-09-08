import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperProvider } from "../../providers/helper/helper";
import { AllserviceProvider } from "../../providers/allservice/allservice";
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signupForm: FormGroup;
  constructor(public builder:FormBuilder,public navCtrl: NavController, public navParams: NavParams,public helper:HelperProvider,public allservice:AllserviceProvider) {
    this.signupForm = builder.group({
      'name': ['',Validators.required],
      'email':['', [Validators.required,Validators.email]],
      'password':['', [Validators.required, Validators.minLength(6)]],
      'address':['',Validators.required],
      'mobile':['',Validators.required],
      'postcode':['',Validators.required],

    })
    
  }
  isFieldValid(field: string) {
    return !this.signupForm.get(field).valid && this.signupForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => { // {1}
      const control = formGroup.get(field);            // {2}
      control.markAsTouched();       // {3}
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  next(form){
    console.log(form.valid);
    if(form.valid){

      let data={ 
        "method":"register",
        "name"	:form.value.name,
        "email" :form.value.email,
        "password":form.value.password,
        "address":form.value.address,
        "mobile_number":form.value.mobile,
        "postal_code"	:form.value.postcode
      }
      this.helper.showSpinner();
      this.allservice.call(data).subscribe(res => {
        this.helper.hideSpinner();
        this.helper.simpleToast(res.result);
            if (res.status == 200) {
                this.navCtrl.pop();
            }
        },
        err => {
            this.helper.handleRequestError(err);
        }
      );
    }
   else
   {
    this.validateAllFormFields(form);
    }
  }
}
