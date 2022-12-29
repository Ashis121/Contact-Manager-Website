import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public contactname!:string;

  constructor(private _acroute:ActivatedRoute,private _router:Router,private _contactService:ContactsService) { }

  ngOnInit(): void {
    this._acroute.params.subscribe(param=>{
      this.contactname = param.cname
    })
  }

  delContact(){
    this._contactService.delContact(this.contactname).subscribe(
      ()=>console.log("Deleted successfully")
      ,err=>console.log(err)
    );
    this._router.navigate(['/contacts'])
  }

  noDelete(){
    this._router.navigate(['/contacts'])
  }
}
