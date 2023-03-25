import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
})
export class UiButtonComponent {
  @Input() label! : string;
  @Input() icon! : string;
  @Input() size : string ="default";
  @Input() fill! : string;
  @Input() color! : string;
  @Input() slot! : string;
}
