import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-chat-card',
  templateUrl: './ui-chat-card.component.html',
  styleUrls: ['./ui-chat-card.component.scss'],
})
export class UiChatCardComponent implements OnInit {
  @Input() user!: string;
  @Input() text!: string;
  @Input() imageUrl!: string;
  @Input() imageDescription!: string;
  @Input() iconPosition!: string;
  @Input() customClass!: string;
  textOrientation!: string;
  constructor() {}

  ngOnInit() {
    // this.setTextOrientation();
  }
  // setTextOrientation() {
  //   if (this.user === 'Celina') {
  //     this.textOrientation = 'text-right mx-2';
  //     return ;
  //   }
  //   this.textOrientation = 'text-left mx-2';
  // }
}
