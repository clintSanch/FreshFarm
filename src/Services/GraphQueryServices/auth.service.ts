import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { Socket } from 'ngx-socket-io';
import { User } from 'src/DocumentObjectModel/user';
import { Constants } from 'src/app/Config/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private wsocket: Socket, private constant: Constants) { }

  api_url = this.constant.api_Endpoints;
  mock_url = this.constant.mock_Endpoints;

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
