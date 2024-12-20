import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = new BehaviorSubject<boolean>(localStorage.getItem('token')? true: false);
  constructor(private _http:HttpClient) {}

  registerFrom(from:object):Observable<any> {
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signup',from)
  }

  loginForm(from:object):Observable<any> {
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signin', from)
  }

  logout() {
    localStorage.removeItem('token');
    this.isLogged.next(false);
  }

}
