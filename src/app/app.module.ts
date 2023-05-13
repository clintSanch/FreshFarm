import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from 'src/Modules/General/home/home.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserStateInterceptor } from 'src/Interceptors/browser-state.interceptor';
import { GraphQLModule } from './graphql.module';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const config: SocketIoConfig = {
  url: "http://localhost:5000",
  options: {
    
  }
}

export const tokenGetter = () => {
  return localStorage.getItem("");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    SocketIoModule.forRoot(config),
    JwtModule.forRoot({ config : {
      tokenGetter: tokenGetter,
      allowedDomains: [""],
      disallowedRoutes: [""]
    }}),
    AppRoutingModule,
    RouterModule,
    HomeModule,
    GraphQLModule,
    ApolloModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BrowserStateInterceptor, multi: true },
    {
      provide: APOLLO_OPTIONS, useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: ''
          })
        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
