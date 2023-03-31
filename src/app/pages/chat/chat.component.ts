import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { log } from 'console';
import { Observable, Subscription, map } from 'rxjs';
import { Message } from 'src/app/models/message.interface';
import { ChatDataService } from 'src/app/services/chat-data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  private subscriptions$: Subscription = new Subscription();
  protected chatMessages: Message[] = [];
  protected welcomeMessage = `
    ¡Hola, mucho gusto! Soy Celina, un chatbot desarrollado para sugerirte las mejores opciones libre de gluten que te ayuden con tu dieta. ¡Preguntame lo que quieras!
    `;
  protected formGroup!: FormGroup;
  constructor(private chatData: ChatDataService, private fb: FormBuilder) {}
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      textChat: [''],
    });
  }
  send() {
    let data: Message = {
      user: 'Yo',
      text: this.formGroup.get('textChat')?.value,
      orientation: 'text-right',
    } as Message;
    this.chatMessages.push(data);
    this.subscriptions$.add(
      this.chatData
        .sendMessage(data)
        .pipe(
          map((response: Message) => {
            response.orientation = 'text-left';
            this.chatMessages.push(response);
          })
        )
        .subscribe()
    );
  }
}
