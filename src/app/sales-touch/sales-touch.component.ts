import { Component, OnInit, ViewChild, ElementRef, Renderer2, Host } from '@angular/core';
import { Product } from '../models/Product';
declare var $: any;

@Component({
  selector: 'app-sales-touch',
  templateUrl: './sales-touch.component.html',
  styleUrls: ['./sales-touch.component.less']
})



export class SalesTouchComponent implements OnInit {

  @ViewChild('table') table;
  // jQuery DOM для таблицы с продуктами
  dataTable: any;
  @ViewChild('modalWindow') modal;
  // jQuery DOM для модалки
  modalWindow: any;

  // Переменная для ввода в окне
  inputModal: string = "";

  // Команда-ключ-идентификатор case для модального окна
  Command: string = null;
  // Command:string = "AddProduct";

  Products: Array<Product> = [
    new Product(111, "Картошка", 14, 1.12, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(112, "Морковка", 16, 1.00, 0, "кг"),
    new Product(113, "Слива", 18, 1.00, 0, "кг")
  ];

  constructor(
    private saleDOM: ElementRef
  ) {

  }

  ngOnInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.modalWindow = $(this.modal.nativeElement);

    this.dataTable.DataTable({
      "scrollY": this.dataTable.closest(".card").height() - 46,
      "scrollCollapse": true,
      "paging": false,
      "searching": false,
      "info": false,
      "ordering": false,
      "language": {
        "zeroRecords": " "
      }
    });
    $(this.saleDOM.nativeElement).find(".dataTables_wrapper, .dataTables_scrollHeadInner").width("100%");
  }

  // Открывает модальное окно. command - case-идентификатор
  openModalDialog(command:string) {
    this.Command = command;
    this.modalWindow.modal("show");
  }

  //Возникает при изминении input в AddProduct
  changeInputModal(val:string){
    this.inputModal = val;
  }

  //Возникает при нажаии "ОК" input в AddProduct
  selectInputModal(event:boolean){
    console.log("selected enter");
  }
}
