import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypalRoutingModule } from './paypal-routing.module';
import { PaypalComponent } from '../paypal.component';
import { ClientSocketService } from 'src/Services/clientSocketServices/client-socket.service';


@NgModule({
  declarations: [
    PaypalComponent
  ],
  imports: [
    CommonModule,
    PaypalRoutingModule
  ],
  providers: [
    ClientSocketService
  ],
  exports: [
    PaypalComponent 
  ]
})
export class PaypalModule { }
