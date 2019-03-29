import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.less']
})
export class DialogWindowComponent implements OnInit, AfterViewInit {
  @Input() title = "Подтвердите действие";
  @Input() discription;
  @Input() buttonArray: Array<any>;
  @Input() width = '40%';
  @Input() icon;
  //{hasVisible: true, placeholder: "asd"}
  //@Input() input:any = {hasVisible: false};
  //[{placeholder:"asd",label:"asd"}]
  // @Input() inputs: Array<any> = [
  //   { placeholder: "asd1", label: "asd1", helpText: "asd1" },
  //   { placeholder: "asd2", label: "asd2", helpText: "asd2" }
  // ];
  // @Input() inputs:Array<any> = [
  //   {placeholder:"asd1",label:"asd1", helpText: "asd1"}
  // ];
  @Input() inputs:Array<any> = [];



  inputData: Array<any> = [];

  @Output() onClickButton: EventEmitter<any> = new EventEmitter<any>();

  currentTab = 1;
  minTab = 1;
  maxTab;

  constructor() { }

  ngAfterViewInit() {
    //if (this.input.hasVisible) $("input").focus();
    if (this.inputs.length > 0) $("input")[0].focus();
    else {
      // фокус на кнопку
    }
  }

  ngOnInit() {
    this.onKeyDown();
    this.maxTab = this.buttonArray.length;
    if (this.inputs.length > 0)
    this.inputs.forEach(el => {
      this.inputData.push("");
    });
  }

  onClick(element: any) {
    this.onClickButton.emit(element.innerText);
  }

  onKeyDown() {
    document.onkeydown = (e) => {
      if (e.key === 'F1') {
        e.preventDefault();
        return false;
      }
      //console.log(this.input.hasVisible);
      switch (e.keyCode) {
        //Enter
        case 13: {
          this.buttonArray.forEach(el => {
            if (el.title === "Ок") {
              //console.log(this.input);
              // if (this.input.hasVisible){
              //   this.onClickButton.emit(this.inputData);
              // }
              // else {

              //   this.onClickButton.emit(el.title);
              // }
              if (this.inputs.length === 0) {
                this.onClickButton.emit(el.title);
              } else if (this.inputs.length === 1) {
                this.onClickButton.emit(this.inputData);
              } else if (this.inputs.length > 1) {
                let currentInd = document.activeElement.getAttribute("tabindex");
                let elem: any = document.querySelector("[tabindex='" + (parseInt(currentInd) + 1) + "']");
                if (elem !== null) elem.focus();
                else {
                  //нажать ОК
                  this.onClickButton.emit(this.inputData);
                }
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

  next() {
    if (this.currentTab < this.maxTab) this.currentTab++;
  }

  prev() {
    if (this.currentTab > this.minTab) this.currentTab--;
  }

}
