import { Injectable } from '@angular/core';
import {Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { User } from 'src/DocumentObjectModel/user';


@Injectable({
  providedIn: 'root'
})
export class ClientSocketService {

  constructor(private socket: Socket) { }

  /**
   * emit() method, and 
   * fromEvent() method to be applied here
   */

  emitUser = (user:User) : void => {
    this.socket.emit('add-user', user)
  }

  emitExit = ():void => {
    this.socket.emit('exit')
  }

  getOnlineUsers = () : Observable<User[]> => {

    return this.socket.fromEvent<User[]>('users-online')
  }

}
