import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { FormsModule }   from '@angular/forms';
import { SaleComponent } from './sale/sale.component';
import { MenuComponent } from './menu/menu.component';
import { CompletedSaleComponent } from './modalDialogs/completed-sale/completed-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SignInComponent,
    MainComponent,
    SaleComponent,
    MenuComponent,
    CompletedSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
