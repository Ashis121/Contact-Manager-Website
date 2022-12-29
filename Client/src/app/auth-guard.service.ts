import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _userService:UserService,private router:Router) { }

  canActivate() {
    if(!this._userService.isLoggedin()) {
      this.router.navigate(['/login'])
      return false;
    }
    return true;
  }
}
