import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiChatCardComponent } from './ui-chat-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    UiChatCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [
    UiChatCardComponent
  ]
})
export class UiChatCardModule { }
