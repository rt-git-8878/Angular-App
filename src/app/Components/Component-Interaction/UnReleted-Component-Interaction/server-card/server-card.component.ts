import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.css']
})
export class ServerCardComponent implements OnInit {
public ServerText:string='';
@Input() receiveText:string;
@Output() sendToClient=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
public SubmittoClient()
{
  this.sendToClient.emit(this.ServerText);
}

}
