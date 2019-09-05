import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConfigService } from './app-config.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //private url:string = "http://192.168.0.65:33011/";
  private IsAuthorized: boolean;
  private Message: string;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.IsAuthorized = false;
  }

  GetMessageAndValue() {
    return { Value: this.IsAuthorized, Message: this.Message };
  }

  Login(login: string, password: string) {
    const body = { Login: login, Password: password };
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "Login", JSON.stringify(body))
      .pipe(map(u => {
        this.Message = u.GMessage;
        this.IsAuthorized = u.GValue;
        localStorage.setItem('IsAuthorized', JSON.stringify(this.IsAuthorized));
      }));
  }

  Login2(login: string, password: string) {
    const body = { Login: login, Password: password };
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "Login2", JSON.stringify(body))
      .pipe(map(u => {
        this.Message = u.GMessage;
        this.IsAuthorized = u.GValue;
        localStorage.setItem('IsAuthorized', JSON.stringify(this.IsAuthorized));
      }));
  }

  LoginByCardCode(cardCode: string) {
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "LoginByCardCode", JSON.stringify(cardCode))
      .pipe(map(result => {
        //TODO: действие с результатом
        console.log(result);
      }));
  }

  IsCanLogout() {
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "IsCanLogout")
      .pipe(map(result => {
        //TODO: действие с результатом
        console.log(result);
      }));
  }

  Logout() {
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "Logout")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  Logout2() {
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "Logout2")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  IsLogin(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "IsLogin")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  ////end auth

  GetReceiptWorked(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "GetReceiptWorked")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  GetListPureProductByEntryCode(code:string){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "GetListPureProductByEntryCode", JSON.stringify(code))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  SpecialReturn(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "SpecialReturn")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  GetPaymentViewModelFromReceipt(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "GetPaymentViewModelFromReceipt")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  GetWarningFromFiscal(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "GetWarningFromFiscal")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  DoAnulReceipt(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "DoAnulReceipt")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  GetCountPendingReceipts(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "GetCountPendingReceipts")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  PendingReceipt(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "PendingReceipt")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  GetPendingReceipts(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "GetPendingReceipts")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  GetPengingReceiptByDatetime(dateTime:number){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "GetPengingReceiptByDatetime", JSON.stringify(dateTime))
      .pipe(map(result => {
        //TODO: действие с результатом
        console.log(result);
      }));
  }

  ChangeProductAmount(Position:number,Value:number){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "ChangeProductAmount", JSON.stringify({Position:Position,Value:Value}))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  //art - string ??????
  GetPureProductsByArticle(article:string){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "GetPureProductsByArticle", JSON.stringify(article))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  GetHotProduc(product:string){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "GetHotProduc", JSON.stringify(product))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  SetNewPrice(Position:number,Value:number){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "ChangeProdSetNewPriceuctAmount", JSON.stringify({Position:Position,Value:Value}))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  DoReportByDate(){
    //TODO: сделать функцию
  }

  DoSellArticleReport(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "DoSellArticleReport")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  DoReportByZNumber(ZFrom:number,ZTo:number, IsFull){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "DoReportByZNumber", JSON.stringify({ZFrom:ZFrom,ZTo:ZTo,IsFull:IsFull}))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  IsAddProductByEntry(Bar:string, Price:number, Amount:number){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "IsAddProductByEntry", JSON.stringify({Bar:Bar,Price:Price,Amount:Amount}))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  GetWeightFromScales(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "GetWeightFromScales")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  IsScalesPresent(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "IsScalesPresent")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  IsAdditionalWeight(Bar:string, Price:number){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "IsAdditionalWeight", JSON.stringify({Bar:Bar,Price:Price}))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  PrintCopyReceipt(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "PrintCopyReceipt")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  SetDateTimeFiscal(DateTime:number){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "SetDateTimeFiscal", JSON.stringify(DateTime))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  DoZeroReceipt(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "DoZeroReceipt")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  PrintReceiptFromKlefByNumber(Number:number){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "PrintReceiptFromKlefByNumber", JSON.stringify(Number))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  SaveTempReceiptAndDisplayProduct(){
    return this.http.get(this.appConfigService.Get("apiBaseUrl") + "SaveTempReceiptAndDisplayProduct")
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  CheckForbiddenBar(Bar:string){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "CheckForbiddenBar", JSON.stringify(Bar))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  CheckForbiddenTaxgroup(Taxgroup:number){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "CheckForbiddenTaxgroup", JSON.stringify(Taxgroup))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  GetParseBarcode(Barcode:string){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "GetParseBarcode", JSON.stringify(Barcode))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  GetPureProductInReceiptByBar(Bar:string){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "GetPureProductInReceiptByBar", JSON.stringify(Bar))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  AppendPaymentToReturnReceipt(Amount:number,PaymentName:string){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "AppendPaymentToReturnReceipt", JSON.stringify({Amount:Amount,PaymentName:PaymentName}))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  AppendPaymentToRandomReturnReceipt(Amount:number,PaymentName:string){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "AppendPaymentToRandomReturnReceipt", JSON.stringify({Amount:Amount,PaymentName:PaymentName}))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  AppendPayment(Amount:number,PaymentName:string){
    return this.http.post<any>(this.appConfigService.Get("apiBaseUrl") + "AppendPayment", JSON.stringify({Amount:Amount,PaymentName:PaymentName}))
    .pipe(map(result => {
      //TODO: действие с результатом
      console.log(result);
    }));
  }

  //IsCanAddAmountSecond
}
