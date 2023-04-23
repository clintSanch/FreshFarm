import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { UserData } from 'src/DocumentObjectModel/user-data'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  removeUser = gql`
       mutation removeUser{
        removeuser(UserData.userId){
          
        }
       }
  `;

  updateUser = gql`
      mutation updateUser{
        updateUser(userId: 100){
          this.firstname,
          this.lastname,
          this.email,
          this.password,
          this.phone_number
        }
      }
  `;
}
