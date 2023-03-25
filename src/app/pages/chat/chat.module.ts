import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { UiTypeWriterModule } from 'src/app/widgets/ui-type-writer/ui-type-writer.module';


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    UiTypeWriterModule
  ]
})
export class ChatModule { }
