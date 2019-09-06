import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product'

@Component({
  selector: 'app-sales-touch',
  templateUrl: './sales-touch.component.html',
  styleUrls: ['./sales-touch.component.less']
})
export class SalesTouchComponent implements OnInit {

  Products:Array<Product> = [
    new Product(111, "Картошка", 14, 1.12, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(113, "Слива", 18, 1.00, 0, "кг")
  ];

  Buttons:Array<number>=[1,1,1,1,1,1,1,1,1,1];

  constructor() { }

  ngOnInit() {
  }

}
