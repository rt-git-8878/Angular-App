import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { IContact } from 'src/app/Models/IContact';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts:IContact[];
  public errorMessage:string;
  @Output() sendContact= new EventEmitter();
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data)=>{
      this.contacts=data;
    },(error)=>{
      this.errorMessage=error;
    }
  );
  }
  public SelectContact(contact:IContact){
   // alert(JSON.stringify(contact));
   this.sendContact.emit(contact);
  }

}
