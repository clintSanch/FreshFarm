import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductProperties } from 'src/DocumentObjectModel/product-properties';
import { Socket } from 'ngx-socket-io';
import { Constants } from 'src/app/Config/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient, private wsocket: Socket, private constant: Constants) { }

  api_url = this.constant.api_Endpoints;
  mock_url = this.constant.mock_Endpoints;

  postProduct(){

    return;
  }

  getProducts = () => {
    return;
  }

  getIndividulProduct(){

    return;
  }

  updateProduct(){

    return;
  }

  removeProduct(){

    return;
  }
  
}
