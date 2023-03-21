import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

const childRoutes: Routes = [
    {path: 'signUp', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }