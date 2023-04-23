import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
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

  /**
   * create,
   * update, and 
   * Delete (CUD)
   * In all these, mutation is the key
   */

  registerUser = gql`
        mutation registerUser($user_id: string!, $firstname string!, $lastname: string!, $email: string!, $phonenumber: number!, $password: string!){
          registerUser(userid: $user_id, firstname: $fistname, lastname: $lastname, email: $email, phone_number: $phonenumber, password: $password) : User! {
            userid
            firstname
            lastname
            email
            phone_number
            password
          }
        }
  `;


  loginUser = gql`
       mutation loginUser($firstname: string!, $email: string!, $password: string!){
         loginUser(username: $firstname, email: $email, password: $password) : User! {
           username
           jwt
         }
       }
  `;

  isLoggedIn = gql`
       query isLoggedIn{
        isLoggedIn(){

        }
       }
  `;
}
