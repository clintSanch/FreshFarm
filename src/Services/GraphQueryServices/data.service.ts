import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  removeUser = gql`
       mutation removeUser{
        removeuser(){

        }
       }
  `;

  updateUser = gql`
      mutation updateUser{
        updateUser(){
          
        }
      }
  `;
}
