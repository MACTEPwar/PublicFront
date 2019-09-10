import { Component, OnInit, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.less']
})

export class DialComponent implements OnInit {

  // jQuery DOM for this component 
  dialDOM: any;
  // height for this component
  height: number = 200;
  //heigh for this component in "px"
  heightStyle: string;
  ////end
  // Текущее набранное число
  currentNumber: string = "";
  //Режим тестирования
  @Input() test: boolean = false;

  //Отдаю значение currentNumber при изменении
  @Output() onChanged = new EventEmitter<string>();
  @Output() onSelected = new EventEmitter<boolean>();

  constructor(
    private dial: ElementRef
  ) {
    this.dialDOM = $(this.dial.nativeElement);
    this.heightStyle = this.height + "px";
  }

  ngOnInit() {
    this.dialDOM.find(".col-num").width(this.height / 4);
  }

  addNumber(number: string) {
    this.currentNumber += number;
    this.onChanged.emit(this.currentNumber);
  }

  breakNumber() {
    if (this.currentNumber.length > 0) {
      this.currentNumber = this.currentNumber.substring(0, this.currentNumber.length - 1);
      this.onChanged.emit(this.currentNumber);
    }
  }

  select() {
    this.onSelected.emit(true);
    this.currentNumber = "";
    this.onChanged.emit(this.currentNumber);
  }

}
