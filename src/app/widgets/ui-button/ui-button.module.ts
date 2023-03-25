import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiButtonRoutingModule } from './ui-button-routing.module';
import { IonicModule } from '@ionic/angular';
import { UiButtonComponent } from './ui-button.component';


@NgModule({
  declarations: [
    UiButtonComponent
  ],
  imports: [
    CommonModule,
    UiButtonRoutingModule,
    IonicModule
  ],
  exports : [
    UiButtonComponent
  ]
})
export class UiButtonModule { }
