import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public message!:string;
  public email!:string;
  public password!:string;
  public isError:boolean = false;
  public isSuccess:boolean = false;

  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const login = {
      email:this.email,
      password:this.password
    }
    this._userService.loginUser(login).subscribe(response=>{
      this.message = response.message;
      this.isError = false;
      this.isSuccess = true;
      localStorage.setItem('token',response.token);
      localStorage.setItem('userid',response.user.id);
      localStorage.setItem('username',response.user.name);
      this._router.navigate(['/contacts'])
    },
    err=>{
      this.message = err.error.message
      this.isError = true;
      this.isSuccess = false;
    }
    )
  }

}
