import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent},
  
  { path: 'signIn', loadChildren: () => import('../Modules/General/sign-in/signIn.module').then(module => module.SignInUpModule)},
  { path: 'signUp', loadChildren: () => import('../Modules/General/sign-up/sign-up/signUp.module').then(module => module.SignUpModule)},
  { path: 'profile', loadChildren: () => import('../Modules/General/profile/profile.module').then(module => module.ProfileModule)},
  { path : 'mpesa', loadChildren: () => import('../Modules/BusinessLogic/mpesa/mpesa/mpesa.module').then(module => module.MpesaModule)},
  { path : 'paypal', loadChildren: () => import('../Modules/BusinessLogic/paypal/paypal/paypal.module').then(module => module.PaypalModule)},
  { path : 'mpesa', loadChildren: () => import('../Modules/BusinessLogic/product/product/product.module').then(module => module.ProductModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
