import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpesaRoutingModule } from './mpesa-routing.module';
import { MpesaComponent } from '../mpesa.component';
import { ClientSocketService } from 'src/Services/clientSocketServices/client-socket.service';


@NgModule({
  declarations: [
    MpesaComponent
  ],
  imports: [
    CommonModule,
    MpesaRoutingModule
  ],
  providers: [
    ClientSocketService
  ],
  exports: [
    MpesaComponent
  ]
})
export class MpesaModule { }
