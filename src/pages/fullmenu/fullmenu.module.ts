import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullmenuPage } from './fullmenu';

@NgModule({
  declarations: [
    FullmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(FullmenuPage),
  ],
})
export class FullmenuPageModule {}
