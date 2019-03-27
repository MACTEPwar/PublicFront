import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import {Functions} from '../functions';
import { Router } from '@angular/router';
//import * from 'node_modules/jquery';
declare var $: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit, DoCheck {

  constructor(private router: Router) { }

  tabIndexMax: number = 3;
  tabIndexMin: number = 1;
  tabIndexCurrent: number = this.tabIndexMin;

  ngDoCheck() {
    $("[tabIndex='" + this.tabIndexCurrent + "']").focus();
  }

  ngOnInit() {
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 13: {
          if ($("[tabIndex='" + this.tabIndexCurrent + "']").prop("tagName") === "BUTTON")
          {
            //DO SUBMIT FORM
            this.router.navigate(['sale']);
          }
          else{
            this.nextTabIndex();
          }
          break;
        }
        //вверх
        case 38: {
          this.prevTabIndex();
          break;
        }
        //вниз
        case 40: {
          this.nextTabIndex();
          break;
        }
        default:
          {
            console.log("вы  " + e.keyCode);
            break;
          }
      }
    };
  }

  nextTabIndex() {
    if (this.tabIndexCurrent < this.tabIndexMax) this.tabIndexCurrent++;
  }

  prevTabIndex() {
    if (this.tabIndexCurrent > this.tabIndexMin) this.tabIndexCurrent--;
  }

  onSubmitForm(){
    return false;
  }

}
