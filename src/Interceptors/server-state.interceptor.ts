import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {

  constructor(private tansferState: TransferState, @Inject(PLATFORM_ID) platformId: Object) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
