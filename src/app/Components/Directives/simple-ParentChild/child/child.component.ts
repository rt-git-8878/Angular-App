import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() msg:string;
@Output() sendData=new EventEmitter();
public data:string='Hello!! from Child';
  constructor() { }

  ngOnInit(): void {
  }
public sendTo()
{
  this.sendData.emit(this.data);
}
}
