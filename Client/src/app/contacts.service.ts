import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public authtoken = localStorage.getItem('token')??'null';


  constructor(private _http:HttpClient) { }

  contactList() {
    return this._http.get<{message:string,contactData:any}>(environment.basecontacturl+"/usersearch/"+localStorage.getItem('userid')
    ,{ headers:new HttpHeaders().set('x-auth-token',this.authtoken)}
    )
  }
  
  getcontactbyname(cname:any) {
    return this._http.get<{message:string,contactData:any}>(environment.basecontacturl+"/"+cname
    ,{ headers:new HttpHeaders().set('x-auth-token',this.authtoken)}
    )
  }
  
  updateContact(name:string,contact:any) {
    return this._http.put<{message:string}>(environment.basecontacturl+"/"+name,contact
    ,{ headers:new HttpHeaders().set('x-auth-token',this.authtoken)}
    )
  }
  
  addContact(newcontact:any){
    return this._http.post<{message:string,contactData:any}>(environment.basecontacturl+"/",newcontact
    ,{ headers:new HttpHeaders().set('x-auth-token',this.authtoken)}
    )
  }
  
  delContact(contact:any){
    return this._http.delete<void>(environment.basecontacturl+"/"+contact
    ,{ headers:new HttpHeaders().set('x-auth-token',this.authtoken)}
    )
  }
}
