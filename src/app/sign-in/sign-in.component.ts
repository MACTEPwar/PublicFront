import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import {Functions} from '../functions';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { RequestModelLogin } from '../models/RequestModelLogin';
import { AuthenticationService } from '../services/authentication.service';
import { first } from 'rxjs/operators';
import { ApiServiceService } from '../services/api-service.service';
//import * from 'node_modules/jquery';
declare var $: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
  providers:[ApiServiceService]
})
export class SignInComponent implements OnInit, DoCheck {

  constructor(
    private router: Router, 
    private authService:AuthenticationService,
    private apiService:ApiServiceService
    ) { }

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
            let Params:Array<object> = [{a:1},{b:2}];

            // if (Params instanceof Array){
            //   let param = {};
            //   Params.forEach(function(item){
            //     if (typeof item === "object"){
            //       param[Object.keys(item)[0]] = Object.values(item)[0];                  
            //     }
            //   });
            // }

            // this.authService.Login("1","1").pipe(first())
            // .subscribe(
            //   data => {
            //     let d = this.authService.GetMessageAndValue();
            //     this.router.navigate(['sale']);
            //   },
            //   error => {
            //     console.log("error sending")
            //   });  
            
            this.apiService.SendComand("Login",[{"Login":"1"},{"Password":"1"}])
            .pipe(first())
            .subscribe(
              data => {
                let d = this.authService.GetMessageAndValue();
                this.router.navigate(['sale']);
              },
              error => {
                console.log("error sending")
              });  
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