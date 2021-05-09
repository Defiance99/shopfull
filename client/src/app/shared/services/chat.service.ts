import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
/* import { io } from "socket.io-client"; */
import { ChatMessage } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: any;
  author: string = '';
  
  constructor() { }

  setAuthor(name: string) {
    this.author = name;
  }

  getAuthor(): string {
    return this.author;
  }

  listen(): Observable<ChatMessage> {
    return new Observable<ChatMessage>(observer => {
      this.socket.on('msgToClient', (message: ChatMessage) => observer.next(message));
    });
  }

  getQuanUsers(): Observable<number> {
    return new Observable<number>(observer => {
      this.socket.on('quanUsers', (quantity: number) => observer.next(quantity));
    });
  }

  initSocket() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    console.log(this.socket ,environment.SOCKET_ENDPOINT )
  }

  disconnetSocket() {
    this.socket.disconnect();
  }

  sendMessage(message: ChatMessage) {
    this.socket.emit('msgToServer', message);
  }

}
