import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { UiTypeWriterModule } from 'src/app/widgets/ui-type-writer/ui-type-writer.module';
import { UiInputTextModule } from 'src/app/widgets/ui-input-text/ui-input-text.module';
import { UiButtonModule } from 'src/app/widgets/ui-button/ui-button.module';


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    UiTypeWriterModule,
    UiInputTextModule,
    UiButtonModule
  ]
})
export class ChatModule { }
