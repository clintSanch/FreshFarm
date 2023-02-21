import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { User } from 'src/DocumentObjectModel/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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
