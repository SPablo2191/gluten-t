import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatDataService {

  constructor(private httpClient: HttpClient) { }

  sendMessage(data : any){
    return this.httpClient.post<Message>("http://127.0.0.1:5000",data);
  }
}
