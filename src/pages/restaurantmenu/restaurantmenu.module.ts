import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantmenuPage } from './restaurantmenu';

@NgModule({
  declarations: [
    RestaurantmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantmenuPage),
  ],
})
export class RestaurantmenuPageModule {}
