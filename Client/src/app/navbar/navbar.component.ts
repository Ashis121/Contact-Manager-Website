import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user!:string;
  public cname!:string;
  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('username')??'null';
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    this._router.navigate(['/login'])

  }

  onclick(cname:any) {
    console.log(cname)
    this._router.navigate([`/contacts/specific/${cname}`])
  }

}
