import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-chat-card',
  templateUrl: './ui-chat-card.component.html',
  styleUrls: ['./ui-chat-card.component.scss'],
})
export class UiChatCardComponent implements OnInit {
  @Input() user!: string;
  @Input() text!: string;
  @Input() imageUrl: string = 'assets/icon/user.png';
  @Input() imageDescription!: string;
  @Input() iconPosition!: string;
  @Input() customClass!: string;
  textOrientation!: string;
  constructor() {}

  ngOnInit() {}
}
