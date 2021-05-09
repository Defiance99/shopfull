import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface ChatMessage {
  'author': string,
  'message': string,
}

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer()
    server: Server;
    users: number = 0;
    
    @SubscribeMessage('msgToServer')
    handleMessage(@MessageBody() message: ChatMessage): void {
      this.server.emit('msgToClient', message);
    }
  
    handleConnection(client: Socket, ...args: any[]) {
      this.users++;
      console.log(this.users);
      this.server.emit('quanUsers', this.users);
    }
  
    handleDisconnect(client: Socket) {
      this.users--;
      console.log('DIS', this.users);
      this.server.emit('quanUsers', this.users);
    }

    afterInit(server: Server) {
        console.log('123')  
    }

}