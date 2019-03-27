import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit,OnDestroy {
  //rout: Router;
  constructor(private router: Router) { }

  ngOnDestroy(){
    document.removeEventListener("keydown",()=>{});
  }

  ngOnInit() {
    
    document.onkeydown = (e) => {
        switch(e.keyCode){
          case 13:{
            console.log("вы нажали Enter");
            break;
          }
          //f4
          case 115:{
            this.router.navigate(['/login']);
            break;
          }
          default:
          {
            console.log("вы нажали " + e.keyCode);
            break;
          }
        }
    };
  }

  private onKeyEnter(){
    //this.r.navigate();
  }

}
