import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  protected welcomeMessage =
    `
    ¡Hola, mucho gusto! Soy Celina, un chatbot desarrollado para sugerirte las mejores opciones libre de gluten que te ayuden con tu dieta. ¡Preguntame lo que quieras!
    `;
  constructor() {}

  ngOnInit() {}
}
