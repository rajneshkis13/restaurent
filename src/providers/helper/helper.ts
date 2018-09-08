// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

import { Injectable, NgZone } from '@angular/core';
import { LoadingController, ModalController, Platform, Events} from 'ionic-angular';
import { Toast, ToastOptions } from '@ionic-native/toast';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperProvider {

  loader:any;
	connectionState:boolean;
  constructor(private loadingCntrl:LoadingController, private event:Events,
  	private modalCtrl:ModalController, private toast:Toast,
  	private platform: Platform, private spinnerDialog: SpinnerDialog, private zone:NgZone) {
  }

  showSpinner(){
    if (!this.platform.is('cordova')) {this.showLoader(); return} ;
    this.platform.ready().then(() => {
      this.spinnerDialog.show();
    });
}

hideSpinner(){
  if (!this.platform.is('cordova')) {this.hideLoader(); return} ;
  this.spinnerDialog.hide();
}
showLoader() {
   this.loader = this.loadingCntrl.create({
      showBackdrop:true
    });
   this.loader.present();
}

hideLoader(){
  if(this.loader) {
    this.loader.dismiss();
    this.loader = null;
  }
}

createToast(message:string,closeButtonText?:string,position?:string){
  this.hideSpinner();
  if (!this.platform.is('cordova')){console.log(message);return ;} 
  if (!message) return ;
  this.platform.ready().then(() => {
    let toastOptions: ToastOptions = {
      message:message,
      duration: 3000,
      position: position || 'bottom'
     };
    this.toast.showWithOptions(toastOptions).subscribe();
  });
}

createModal(page, data?,options={}){
  let modal = this.modalCtrl.create(page,data, options );
  return modal;
}
changeConnection(status:boolean){
  this.connectionState = status;
  if(!status) this.displayConnectionError();
}

isConnected(){
  return this.connectionState;
}

simpleToast(message){
  this.createToast(message,'');
}
displayConnectionError(posision?){
  this.createToast('ERRORS.OFFLINE','',posision);
}

handleRequestError(err){
  this.createToast('ERRORS.REQUEST','');
}

runZone(callBack?){
  this.zone.run(()=>{
   if(callBack) callBack();
  })
}

closeSearch(){
  this.event.publish('closeSearch', null);
}

}
