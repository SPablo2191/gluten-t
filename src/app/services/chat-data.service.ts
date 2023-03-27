import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatDataService {

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get("http://127.0.0.1:5000");
  }
}
