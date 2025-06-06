import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.css']
})
export class ChildCardComponent implements OnInit {
public childText:string='';
@Input() text:string;
@Output() SendChildData=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
public inputText()
{
  this.SendChildData.emit(this.childText);
}
}
