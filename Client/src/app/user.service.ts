import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  registerUser(reguser:any){
    return this._http.post<{message:string,user:any}>(environment.baseuserurl+"/register",reguser)

  }

  loginUser(loginuser:any) {
    return this._http.post<{message:string,user:any,token:string}>(environment.baseuserurl+"/login",loginuser)
  }

  isLoggedin(){
    if(localStorage.getItem('token') === null) {
      return false;
    } else {
      return !!localStorage.getItem("token")
    }
  }
}
