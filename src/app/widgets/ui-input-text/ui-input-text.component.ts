import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ui-input-text',
  templateUrl: './ui-input-text.component.html',
  styleUrls: ['./ui-input-text.component.scss'],
})
export class UiInputTextComponent{
  @Input() label! : string;
  @Input() formGroup! : FormGroup;
  @Input() name! : string;
  @Input() placeholder! : string;
  @Input() fill : string = "default";
  @Input() color! : string;
}
