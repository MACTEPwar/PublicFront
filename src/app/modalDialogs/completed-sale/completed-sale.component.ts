import { Component, OnInit, Input, AfterViewInit, Output  , EventEmitter} from '@angular/core';
import { $$ } from 'protractor';
//import { EventEmitter } from 'events';
declare var $: any;

@Component({
  selector: 'app-completed-sale',
  templateUrl: './completed-sale.component.html',
  styleUrls: ['./completed-sale.component.less']
})
export class CompletedSaleComponent implements OnInit, AfterViewInit {

  moneyReceived: number;
  oddMoney: number;
  state: number = 0;
  @Input() totalSum: number;
  @Output() isVisible: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngAfterViewInit() {
    $("[tabIndex='100']").focus();
  }

  ngOnInit() {
    this.onKeyDown();
  }

  onKeyDown(){
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 13: {
          
          // DO SAVE
          // asd
          if (this.state === 0) {
            if (this.moneyReceived >= this.totalSum) {
              this.oddMoney = this.totalSum - this.moneyReceived;
              this.state = 1;
            }
            else {
              this.totalSum -= this.moneyReceived;
            }
            break;
          }
          if (this.state === 1) {
            this.state = 0;
            this.isVisible.emit(false);
            break;
          }
          break;
        }
        default: {
        }
      }
    }
  }

  onInputChange(el){
    if (el.key.match(/\d/i) === null) return false; 
  }
}
