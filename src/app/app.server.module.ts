import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerStateInterceptor } from 'src/Interceptors/server-state.interceptor';

const routes: Routes = [ { path: 'shell', component: AppShellComponent }];

@NgModule({
  imports: [
    AppModule,
    ServerTransferStateModule,
    ServerModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppShellComponent
  ],
  providers: [
    //Add only universal providers
    {provide: HTTP_INTERCEPTORS, useClass: ServerStateInterceptor, multi: true}
  ]
})
export class AppServerModule {}
