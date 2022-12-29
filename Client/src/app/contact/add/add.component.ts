import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { ContactsService } from 'src/app/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public contact = new Contact('','','','','')
  public message:string='';
  public isError:boolean = false;
  public isSuccess:boolean = false;
  public userid = localStorage.getItem('userid')??'null';

  constructor(private _contactService:ContactsService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.contact.cuser = this.userid;
    this._contactService.addContact(this.contact).subscribe(response=>{
      this.message = response.message;
      this.isSuccess = true;
      this.isError = false;
    },
    err=>{
      this.message = err.error.message;
      this.isError = true;
      this.isSuccess = false;
      
    })
  }
}
