import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from 'src/Services/RestServices/product.service';
import { ProductComponent } from '../product.component';
import { ClientSocketService } from 'src/Services/clientSocketServices/client-socket.service';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [
    ProductService, ClientSocketService
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
