import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent implements OnInit {

  public img1:string="../../../../../assets/img/card_1.jpg";
  public img2:string="../../../../../assets/img/card_2.jpg";
  public img3:string="../../../../../assets/img/card_3.jpg";
  public img4:string="../../../../../assets/img/card_4.jpg";

public tour:string[]=['Paris','Bankok','Indonesia','Malysia'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
