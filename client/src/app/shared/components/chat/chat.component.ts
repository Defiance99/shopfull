import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatMessage } from '../../interfaces';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  @Output() isConnectedChat = new EventEmitter<boolean>();
  @Output() isHiddenChat = new EventEmitter<boolean>();
  isAuth: boolean = false;
  isName: boolean = false;
  quanUsers: number = 0;
  socket: any;
  messages: ChatMessage[] = [];
  username = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]);
  message = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]);
  chatSub!: Subscription;
  chatQuanSub!: Subscription;

  constructor(
    private authService: AuthService,
    private chatService: ChatService,
  ) { }

  ngOnInit(): void {
    this.setupSocketConnection();
    this.isAuth = this.authService.isAuthenticated();
    if (this.isAuth) this.isName = true;
  }

  ngOnDestroy(): void {
    this.chatService.disconnetSocket();
    this.chatSub.unsubscribe();
    this.chatQuanSub.unsubscribe();
  }

  closeChat() {
    this.isConnectedChat.emit(false);
  }

  hiddenChat() {
    this.isHiddenChat.emit(true)
  }

  setName() {
    this.isName = true;
    this.chatService.setAuthor(this.username.value);
  }

  setupSocketConnection() {
    this.chatService.initSocket();
    this.chatSub = this.chatService.listen()
      .subscribe((message: ChatMessage) => {
        this.messages.push(message);
      });
    this.chatQuanSub = this.chatService.getQuanUsers()
      .subscribe((quantity: number) => {
        this.quanUsers = quantity;
      });
  }

  sendMessage() {
    let message: ChatMessage = {
      'author': String(this.username.value),
      'message': String(this.message.value)
    }
    this.chatService.sendMessage(message);
  }

}
