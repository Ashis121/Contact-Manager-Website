import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public cname:string="Contact Name";
  public cemail:string="Contact Email";
  public cphone:string="Contact Email";
  public ctype:string="Contact Email";
  public contactData:any[]=[];
  
  constructor(private _contactService:ContactsService) { }

  ngOnInit(): void {
    this._contactService.contactList().subscribe(response=>{
      this.contactData = response.contactData
    },err=>err
    )
  }

  showContact(index:any) {
    this.cname = this.contactData[index].contactName;
    this.cemail = this.contactData[index].contactEmail;
    this.cphone = this.contactData[index].contactPhone;
    this.ctype = this.contactData[index].contactType;
  }


}
