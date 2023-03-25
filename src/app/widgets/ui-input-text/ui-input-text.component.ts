import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-input-text',
  templateUrl: './ui-input-text.component.html',
  styleUrls: ['./ui-input-text.component.scss'],
})
export class UiInputTextComponent{
  @Input() label! : string;
  @Input() placeholder! : string;
  @Input() fill : string = "default";
  @Input() color! : string;
}
