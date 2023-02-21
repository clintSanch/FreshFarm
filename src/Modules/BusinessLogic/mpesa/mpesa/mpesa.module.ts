import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpesaRoutingModule } from './mpesa-routing.module';
import { MpesaComponent } from '../mpesa.component';


@NgModule({
  declarations: [
    MpesaComponent
  ],
  imports: [
    CommonModule,
    MpesaRoutingModule
  ],
  providers: [

  ],
  exports: [
    MpesaComponent
  ]
})
export class MpesaModule { }
