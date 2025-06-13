import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.css']
})
export class ParentCardComponent implements OnInit {
public Parenttext:string='';
public ReciveParentData:string;
  constructor() { }

  ngOnInit(): void {
  }

}
