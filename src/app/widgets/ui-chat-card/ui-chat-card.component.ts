import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-chat-card',
  templateUrl: './ui-chat-card.component.html',
  styleUrls: ['./ui-chat-card.component.scss'],
})
export class UiChatCardComponent  implements OnInit {
  @Input() user! : string;
  @Input() text! : string;
  @Input() customClass! : string;
  constructor() { }

  ngOnInit() {}

}
