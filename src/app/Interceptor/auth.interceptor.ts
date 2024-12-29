import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  // token = new BehaviorSubject<string | null>(localStorage.getItem('token'));
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    if (token) {
      let requestClone = request.clone({
        setHeaders: { 'token': token },
      });
      return next.handle(requestClone);
    }
    return next.handle(request);
  }
}
