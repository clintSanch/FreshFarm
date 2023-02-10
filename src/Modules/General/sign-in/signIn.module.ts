import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRoutingModule } from './signin-routing.module';
import { SignInComponent } from './sign-in.component';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule
  ],
  exports: [
    SignInComponent,
  ]
})
export class SignInUpModule { }
