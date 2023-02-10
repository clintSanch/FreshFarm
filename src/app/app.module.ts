import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    GraphQLModule,
    ApolloModule
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
