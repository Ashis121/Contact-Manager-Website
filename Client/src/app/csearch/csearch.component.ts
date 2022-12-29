import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/contact';

@Component({
  selector: 'app-csearch',
  templateUrl: './csearch.component.html',
  styleUrls: ['./csearch.component.css']
})
export class CsearchComponent implements OnInit {

  public contactname!:string;
  public contact = new Contact('','','','','');

  constructor(private _acroute:ActivatedRoute,private _contactService:ContactsService,private _router:Router) { }

  ngOnInit(): void {
    this._acroute.params.subscribe(param=>{
      this.contactname = param.cname
    })
      this._contactService.getcontactbyname(this.contactname).subscribe(response=>{
          this.contactname = response.contactData.contactName
          this.contact.cuser = response.contactData.Userid
          this.contact.cname = response.contactData.contactName
          this.contact.cemail = response.contactData.contactEmail
          this.contact.cphone = response.contactData.contactPhone
          this.contact.ctype = response.contactData.contactType
      })
  }

}
