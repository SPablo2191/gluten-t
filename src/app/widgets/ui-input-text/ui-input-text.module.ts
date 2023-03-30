import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputTextComponent } from './ui-input-text.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UiInputTextComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports : [
    UiInputTextComponent
  ]
})
export class UiInputTextModule { }
