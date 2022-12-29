import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/contact';
import { ContactsService } from 'src/app/contacts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public contactname!:string;
  public contact = new Contact('','','','','');
  public message!:string;
  public isSuccess:boolean = false;
  public isError:boolean = false;
  constructor(private _acroute:ActivatedRoute,private _contactService:ContactsService,private _router:Router) { }

  ngOnInit(): void {
    this._acroute.params.subscribe(param=>{
      this.contactname = param.cname
    })
    this._contactService.getcontactbyname(this.contactname).subscribe(response=>{
      console.log(response)
      this.contactname = response.contactData.contactName
      this.contact.cuser = response.contactData.Userid
      this.contact.cname = response.contactData.contactName
      this.contact.cemail = response.contactData.contactEmail
      this.contact.cphone = response.contactData.contactPhone
      this.contact.ctype = response.contactData.contactType
      console.log(this.contact)
    })
  }

  onSubmit(){
    this._contactService.updateContact(this.contactname,this.contact).subscribe(response=>{
      this.message = response.message
      this.isError = false;
      this.isSuccess = true;
      this._router.navigate(['/contacts'])
    },err=>{
      this.message = err.error.message;
      this.isError = true;
      this.isSuccess = false;
    })
  }


}
