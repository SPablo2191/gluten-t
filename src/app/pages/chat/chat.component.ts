import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, map } from 'rxjs';
import { Message } from 'src/app/models/message.interface';
import { ChatDataService } from 'src/app/services/chat-data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  private subscriptions$: Subscription = new Subscription();
  protected isTyping: boolean = false;
  protected chatMessages: Message[] = [];
  protected userName! : string;
  protected welcomeMessage!: string;
  protected formGroup!: FormGroup;
  constructor(private chatData: ChatDataService, private fb: FormBuilder) {}
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('user')!).displayName.split(" ")[0];
    this.welcomeMessage = `
    ¡Hola, ${this.userName}! Soy Celina, un chatbot desarrollado para sugerirte las mejores opciones libre de gluten que te ayuden con tu dieta. ¡Preguntame lo que quieras!
    `;
    this.formGroup = this.fb.group({
      textChat: [''],
    });
  }
  send() {
    let inputValue: string = this.formGroup.get('textChat')?.value;
    if (inputValue === '') {
      return;
    }
    console.log(JSON.parse(localStorage.getItem('user')!));

    let data: Message = {
      user: this.userName,
      text: inputValue,
      orientation: 'text-right',
      iconPosition : 'end',
      iconImage : JSON.parse(localStorage.getItem('user')!).photoURL
    } as Message;
    this.formGroup.reset();
    this.chatMessages.push(data);
    this.isTyping = true;
    this.subscriptions$.add(
      this.chatData
        .sendMessage(data)
        .pipe(
          map((response: Message) => {
            response.orientation = 'text-left';
            response.iconImage = 'assets/icon/celina.png';
            response.iconPosition = 'start';
            this.chatMessages.push(response);
            this.isTyping = false;
          })
        )
        .subscribe()
    );
  }
}
