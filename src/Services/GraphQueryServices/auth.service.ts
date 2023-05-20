import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Socket } from 'ngx-socket-io';
import { User } from 'src/DocumentObjectModel/user';
import { Constants } from 'src/app/Config/constants';

const userRegister = gql`
      mutation registerUser($user_id: string!, $firstname string!, $lastname: string!, $email: string!, $phonenumber: number!, $password: string!) {
        registerUser(userId:$user_id, firstname: $firstname, lastname: $lastname, email: $email, phonenumber: $phonenumber, password: $password){
          firstname
          lastname
          email
          phonenumber
          password
        }
      }
`

const userLogin = gql`
mutation loginUser($firstname: string!, $email: string!, $password: string!){
  loginUser(username: $firstname, email: $email, password: $password){
    username
    email
    password
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private wsocket: Socket, private constant: Constants, private apollo: Apollo) { }

  api_url = this.constant.api_Endpoints;
  mock_url = this.constant.mock_Endpoints;

  /**
   * create,
   * update, and 
   * Delete (CUD)
   * In all these, mutation is the key
   * 
   * Query operation ---refers to GET/READ operation in Rest services,
   * Mutation operation --refers to CREATE, UPDATE, DELETE operations,
   * Subscription operation --refers to Batch process
   */

  async registerUser() {

    return this.apollo.mutate({
      mutation: userRegister
    }).subscribe(({ data }) => {

    }, error => {
      console.log(error)
    });
  }

  async loginUser() {

    return this.apollo.mutate({
      mutation: userLogin
    }).subscribe(({ data }) => {

    }, error => {
      console.log(error)
    });
  }


  isLoggedIn = gql`
       query isLoggedIn{
        isLoggedIn(){

        }
       }
  `;
}
