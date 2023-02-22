import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { Socket } from 'ngx-socket-io';
import { User } from 'src/DocumentObjectModel/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private wsocket: Socket) { }

  registerUser = gql`
        mutation registerUser{
          registerUser(){

          }
        }
  `;


  loginUser = gql`
       mutation loginUser{
         loginUser(){
           return this.user.register();
         }
       }
  `;

  isLoggedIn = gql`
       query isLoggedIn{

       }
  `;
}
