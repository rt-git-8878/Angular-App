import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/Models/IEmployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
public employees:IEmployee[]=[
  {
    sno:'0011AA',
    name:'Yogesh',
    age:40,
    designation:'HR',
    location:'Pune'
  },
  {
    sno:'0011BB',
    name:'Raj',
    age:20,
    designation:'HR',
    location:'Delhi'
  },
  {
    sno:'0011CC',
    name:'Sunita',
    age:25,
    designation:'HR',
    location:'Hyd'
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
