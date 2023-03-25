import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTypeWriterComponent } from './ui-type-writer.component';



@NgModule({
  declarations: [UiTypeWriterComponent],
  imports: [
    CommonModule
  ],
  exports : [UiTypeWriterComponent]
})
export class UiTypeWriterModule { }
