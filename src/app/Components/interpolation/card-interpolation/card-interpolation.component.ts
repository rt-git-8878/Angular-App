import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-interpolation',
  templateUrl: './card-interpolation.component.html',
  styleUrls: ['./card-interpolation.component.css']
})
export class CardInterpolationComponent implements OnInit {

  public msg:string="Good Morning";
  public price:number=500;
  public time:string=new Date().toLocaleTimeString();
  constructor() { }

  ngOnInit(): void {
  }
//display
public getDate(){
  return new Date().toLocaleDateString();
}
public getTime(){
  setInterval(()=>{
    this.time=new Date().toLocaleTimeString()
  },1000);
}
}
