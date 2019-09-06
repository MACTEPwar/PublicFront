import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { SaleComponent } from './sale/sale.component';
import { MenuComponent } from './menu/menu.component';
import { CompletedSaleComponent } from './modalDialogs/completed-sale/completed-sale.component';
import { SalesTouchComponent } from './sales-touch/sales-touch.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "login", component: SignInComponent },
  { path: "sale", component: SalesTouchComponent },
  { path: "menu", component: MenuComponent },
  { path: "saleComp", component: CompletedSaleComponent },
  { path: "test", component: TestComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
