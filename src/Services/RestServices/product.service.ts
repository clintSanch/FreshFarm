import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductProperties } from 'src/DocumentObjectModel/product-properties';
import { Socket } from 'ngx-socket-io';
import { Constants } from 'src/app/Config/constants';
import { commonEnvironment } from 'src/environments/environment.common';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlEnv = commonEnvironment.serverUrl;

  constructor(private httpClient: HttpClient, private wsocket: Socket, private constant: Constants) { }

  postProduct(){

    return this.httpClient.post(`${this.urlEnv}/api/`, Option);
  }

  getProducts = () => {
    return this.httpClient.get(`${this.urlEnv}/api/`);
  }

  getIndividulProduct(){

    return this.httpClient.get(`${this.urlEnv}/api/`);
  }

  updateProduct(){

    return this.httpClient.put(`${this.urlEnv}/api/`, Option);
  }

  removeProduct(){

    return this.httpClient.delete(`${this.urlEnv}/api/`);
  }
  
}
