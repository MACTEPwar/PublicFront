import { Component, OnInit, Input, Output , EventEmitter, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.less']
})
export class DialogWindowComponent implements OnInit,AfterViewInit {
  @Input() title = "Подтвердите действие";
  @Input() discription;
  @Input() buttonArray: Array<any>;
  @Input() width = '40%';
  @Input() icon;
  //{hasVisible: true, placeholder: "asd"}
  @Input() input:any = {hasVisible: false};
  inputData:string;

  @Output() onClickButton:EventEmitter<string> = new EventEmitter<string>();

  currentTab = 1;
  minTab = 1;
  maxTab;

  constructor() {   }

  ngAfterViewInit(){
    if (this.input.hasVisible) $("input").focus();
    else {
      // фокус на кнопку
    }
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
      console.log(this.input.hasVisible);
      // $("[tabIndex='"+ this.currentTab +"']");
      switch (e.keyCode) {
        //Enter
        case 13: {
          this.buttonArray.forEach(el => {
            if (el.title === "Ок")
            {
              console.log(this.input);
              if (this.input.hasVisible){
                this.onClickButton.emit(this.inputData);
              }
              else {
                
                this.onClickButton.emit(el.title);
              }
            }
            
          });
          break;
        }
        // backspace
        case 27: {
          this.buttonArray.forEach(el => {
            if (el.title === "Отмена")
            this.onClickButton.emit(el.title);
          });
          break;
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
