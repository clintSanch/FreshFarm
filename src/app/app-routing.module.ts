import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'signIn', loadChildren: () => import('../Modules/General/sign-in/signIn.module').then(module => module.SignInUpModule)},
  { path: 'signUp', loadChildren: () => import('../Modules/General/sign-up/sign-up/signUp.module').then(module => module.SignUpModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
