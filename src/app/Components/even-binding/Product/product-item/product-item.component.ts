import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 public product:IProduct={
  id:'A006',
  image:'https://static.toiimg.com/thumb/resizemode-4,msid-54128624,imgsize-500,width-800/54128624.jpg',
  name:'Raj',
  price:200,
  qty:2
 };
  constructor() { }

  ngOnInit(): void {
  }
 public incrQty()
 {
  this.product.qty=this.product.qty+1;
 }
  public decrQty()
 {
  this.product.qty=(this.product.qty-1>0)?this.product.qty-1:1;
 }
}
