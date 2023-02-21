import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpesaComponent } from '../mpesa.component';

const routes: Routes = [
  { path: 'mpesa', component: MpesaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MpesaRoutingModule { }
