import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputTextComponent } from './ui-input-text.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    UiInputTextComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [
    UiInputTextComponent
  ]
})
export class UiInputTextModule { }
