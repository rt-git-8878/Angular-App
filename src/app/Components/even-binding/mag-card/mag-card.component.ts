import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mag-card',
  templateUrl: './mag-card.component.html',
  styleUrls: ['./mag-card.component.css']
})
export class MagCardComponent implements OnInit {
public msg:string='Hello';
  constructor() { }

  ngOnInit(): void {
  }
// public sayGoodMorning()
// {
//   this.msg='Good Morning'
// }
// public sayGoodAfternoon()
// {
//   this.msg='Good Afternoon'
// }
// public sayGoodEvenning()
// {
//   this.msg='Good Evenning'
// }
public dispayMessage(value:string)
{
  this.msg=value;
}
}
