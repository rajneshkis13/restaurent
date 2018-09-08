import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdernowPage } from './ordernow';

@NgModule({
  declarations: [
    OrdernowPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdernowPage),
  ],
})
export class OrdernowPageModule {}
