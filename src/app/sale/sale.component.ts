import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
declare var $: any;

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.less']
})
export class SaleComponent implements OnInit {

  currentProductTitle: string = "";
  totalSum: number = 48;
  constructor(private router: Router) { }

  products: Array<Product> = [
    new Product(111,"Картошка", 14,1, 0,"кг"),
    new Product(112,"Морковка", 16,1, 0,"кг"),
    new Product(113,"Слива", 18,1, 0,"кг")
  ];

  currentIndexProduct = this.products.length;
  currentProduct = this.currentIndexProduct == 0 ? null : this.products[this.currentIndexProduct - 1];
  maxIndexProduct = this.products.length;
  minIndexProduct = this.products == null ? 0 : 1;
  ngOnInit() {
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 13: {
          if (this.currentProductTitle !== "") {
            this.addProduct();
          }
          this.currentProductTitle = "";
          break;
        }
        //вверх
        case 38: {
          this.prevProduct();
          break;
        }
        //вниз
        case 40: {
          this.nextProduct();
          break;
        }
        //f2
        case 113: {
          this.router.navigate(['menu']);
          break;
        }
        //D
        case 68: {
          let count = prompt("Введити количество", '');
          this.products[this.currentIndexProduct - 1].Count -= parseInt(count);
          if (this.products[this.currentIndexProduct - 1].Count <= 0) {
            this.products.splice(this.currentIndexProduct - 1, 1);
            this.currentIndexProduct = this.products.length;
            this.maxIndexProduct = this.products.length;
            this.minIndexProduct = this.products == null ? 0 : 1;
          }
          this.refreshTotalSum();
          break;
        }
        //*
        case 106: {
          let count = prompt("Введити количество", '');
          this.products[this.currentIndexProduct - 1].Count += parseInt(count);
          this.refreshTotalSum();
          break;
        }
        case 85: {
          // отложить товар
        }
        case 65: {
          // анулировать
        }
        case 79: {
          console.log(this.currentProduct);
          // оплата
        }
        case 75: {
          // копия последнего чека
        }
        default: {
          let res = e.key.match(/-?[\d]/i);
          if (res !== null)
            if (res[0] === e.key && e.key.length === 1)
              this.currentProductTitle += e.key;
          break;
        }
      }
    }
  }

  nextProduct() {
    if (this.currentIndexProduct < this.maxIndexProduct) {
      this.currentIndexProduct++;
      this.currentProduct = this.products[this.currentIndexProduct - 1];
    }
  }

  prevProduct() {
    if (this.currentIndexProduct > this.minIndexProduct) {
      this.currentIndexProduct--;
      this.currentProduct = this.products[this.currentIndexProduct - 1];
    }
  }

  addProduct() {
    this.products.push(new Product(113,this.currentProductTitle, 14,1, 0,"кг"));
    this.refreshTotalSum();
    this.currentIndexProduct = this.products.length;
    this.maxIndexProduct = this.products.length;
    this.currentProduct = this.products[this.currentIndexProduct - 1];
  }
  refreshTotalSum() {
    this.totalSum = 0;
    this.products.forEach(el => {
      this.totalSum += el.Price * el.Count;
    });
  }
}
