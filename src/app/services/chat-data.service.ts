import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatDataService {
  private url : string = environment.url;
  constructor(private httpClient: HttpClient) { }

  sendMessage(data : any){
    return this.httpClient.post<Message>(this.url,data);
  }
}
