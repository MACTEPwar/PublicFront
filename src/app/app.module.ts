import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { FormsModule }   from '@angular/forms';
import { SaleComponent } from './sale/sale.component';
import { MenuComponent } from './menu/menu.component';
import { CompletedSaleComponent } from './modalDialogs/completed-sale/completed-sale.component';
import { DialogWindowComponent } from './modalDialogs/dialog-window/dialog-window.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './services/app-config.service';
import { SalesTouchComponent } from './sales-touch/sales-touch.component';
import { TestComponent } from './test/test.component';
import { DialComponent } from './dial/dial.component';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';
//import {ApiServiceService} from './services/api-service.service'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SignInComponent,
    MainComponent,
    SaleComponent,
    MenuComponent,
    CompletedSaleComponent,
    DialogWindowComponent,
    SalesTouchComponent,
    TestComponent,
    DialComponent,
    ScrollBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
          return appConfigService.loadAppConfig();
        };
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
