import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductProperties } from 'src/DocumentObjectModel/product-properties';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient, private wsocket: Socket) { }
}
