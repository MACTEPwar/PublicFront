import { Component, OnInit, Input, Output , EventEmitter, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.less']
})
export class DialogWindowComponent implements OnInit,AfterViewInit {
  @Input() title;
  @Input() discription;
  @Input() buttonArray: Array<any>;
  @Input() width = '40%';
  
  @Output() onClickButton:EventEmitter<string> = new EventEmitter<string>();

  currentTab = 1;
  minTab = 1;
  maxTab; //= this.buttonArray.length;

  constructor() {   }

  ngAfterViewInit(){
    //$("[tabIndex='1']").focus();
  }

  ngOnInit() {
    this.onKeyDown();
    this.maxTab = this.buttonArray.length;
  }

  onClick(element:any){
    this.onClickButton.emit(element.innerText);
  }

  onKeyDown(){
    document.onkeydown = (e) => {
      if (e.key === 'F1') {
        e.preventDefault();
        return false;
      }
      $("[tabIndex='"+ this.currentTab +"']");
      switch (e.keyCode) {
        // case 13: {
        //   break;
        // }
        case 27: {
          
          break;
        }
        //вверх
        case 38: {
          this.next();
          break;
        }
        //вниз
        case 40: {
          this.prev();
          break;
        }
      }
    }
  }

  next(){
    if (this.currentTab < this.maxTab) this.currentTab++;
  }

  prev(){
    if (this.currentTab > this.minTab) this.currentTab--;
  }

}
