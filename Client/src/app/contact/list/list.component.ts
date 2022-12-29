import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public username:string = localStorage.getItem('username')!
  public flag=true;
  // public cuser!:string
  public cname:string="Contact Name";
  public cemail:string="Contact Email";
  public cphone:string="Contact Email";
  public ctype:string="Contact Email";
  public contactData:any[]=[];
  
  constructor(private _contactService:ContactsService, private _router:Router) { }

  ngOnInit(): void {
    this._contactService.contactList().subscribe(response=>{
      this.contactData = response.contactData
    },err=>err
    )
  }

  showContact(index:any) {
    this.flag = false;
    this.cname = this.contactData[index].contactName;
    this.cemail = this.contactData[index].contactEmail;
    this.cphone = this.contactData[index].contactPhone;
    this.ctype = this.contactData[index].contactType;
    // this.cuser = this.contactData[index]._id;
  }

  
  // delete(name:any){
  //   console.log(name);
  //   this._contactService.delContact(name).subscribe(
  //     ()=>console.log("Deleted successfully")
  //     ,err=>console.log(err)
  //   );
  //   this._router.navigate(['/contacts'])
  // }

}
