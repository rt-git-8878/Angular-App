import { Component, Input, OnInit } from '@angular/core';
import { IContact } from 'src/app/Models/IContact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
@Input() selectedContact:IContact;
  constructor() { }

  ngOnInit(): void {
  }

}
