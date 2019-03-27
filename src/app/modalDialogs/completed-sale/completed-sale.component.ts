import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-completed-sale',
  templateUrl: './completed-sale.component.html',
  styleUrls: ['./completed-sale.component.less']
})
export class CompletedSaleComponent implements OnInit {

  moneyReceived: number;
  oddMoney:number;
  state:number = 0;
  @Input() totalSum: number;

  constructor() { }

  ngOnInit() {
    $("[tabIndex='100']").focus();
    console.log( $("app-completed-sale").children().children().find("#inputMoneyReceived"));
    console.log(this); 
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 13: {
          // DO SAVE
          if (this.state === 0){
            if (this.moneyReceived >= this.totalSum){
              this.oddMoney = this.totalSum - this.moneyReceived;
              this.state = 1;
            }
            else{
              this.totalSum -= this.moneyReceived;
            }
            break;
          }
          if (this.state === 1){
            this.state = 0;
            break;
          }
          break;
        }
        default: {
          //console.log(this.moneyReceived);
          // let res = e.key.match(/[\d]/i);
          // if (res !== null)
          //   if (res[0] === e.key && e.key.length === 1) {
          //     console.log(this.moneyReceived.toString());
          //     var strTemp: string = this.moneyReceived.toString();
          //     strTemp += e.key;
          //     this.moneyReceived = parseInt(strTemp);
          //   }
          //   else this.moneyReceived = 0;
          // break;
        }
      }
    }
  }
}
