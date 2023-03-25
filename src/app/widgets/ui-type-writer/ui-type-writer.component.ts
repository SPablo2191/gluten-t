import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-type-writer',
  templateUrl: './ui-type-writer.component.html',
  styleUrls: ['./ui-type-writer.component.scss'],
})
export class UiTypeWriterComponent  implements OnInit {
  @Input() text! : string;
  constructor() { }

  ngOnInit() {}

}
