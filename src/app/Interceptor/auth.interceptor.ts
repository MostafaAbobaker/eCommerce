import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../Shared/Services/loading.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _loadingService:LoadingService) {}
  // token = new BehaviorSubject<string | null>(localStorage.getItem('token'));
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler

  ): Observable<HttpEvent<unknown>> {
    this._loadingService.show();
    let token = localStorage.getItem('token');
    if (token) {
      let requestClone = request.clone({
        setHeaders: { 'token': token },
      });
      return next.handle(requestClone).pipe(
        finalize(() => this._loadingService.hide()),
      );
    }
    return next.handle(request).pipe(
      finalize(() => this._loadingService.hide()),
    );
  }
}
