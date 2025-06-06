import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {
public ClientText:string='';
@Input() receiveText:string;
@Output() sendParent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
public Submit()
{
  this.sendParent.emit(this.ClientText);
}
}
