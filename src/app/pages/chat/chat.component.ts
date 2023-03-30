import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { log } from 'console';
import { ChatDataService } from 'src/app/services/chat-data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  protected welcomeMessage = `
    ¡Hola, mucho gusto! Soy Celina, un chatbot desarrollado para sugerirte las mejores opciones libre de gluten que te ayuden con tu dieta. ¡Preguntame lo que quieras!
    `;
  protected formGroup!: FormGroup;
  constructor(private chatData: ChatDataService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      textChat: [''],
    });
  }
  send() {
    let data = { message: this.formGroup.get('textChat')?.value };
    this.chatData.sendMessage(data).subscribe(console.log);
  }
}
