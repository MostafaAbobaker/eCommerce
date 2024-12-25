import {   Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Authorisation/Services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  langName: string='English';
  isLogin: boolean = false;

  constructor( private _authService:AuthService , private _router:Router) {}
  ngOnInit(): void {
    this._authService.isLogged.subscribe((data)=>{this.isLogin = data})
  }

  logOut() {
    this._authService.logout();
    this._router.navigate(['/Login']);
  }
}
