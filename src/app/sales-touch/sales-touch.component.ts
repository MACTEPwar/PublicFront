import { Component, OnInit, ViewChild, ElementRef, Renderer2, Host, ViewContainerRef, TemplateRef, ContentChild } from '@angular/core';
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

  @ContentChild('test1') tst;

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

    let table = $(".dataTables_scrollBody .table");
    let scrollBody = $(".dataTables_scrollBody").css("overflow", "hidden");
    let scrollHead = $(".dataTables_scrollHead");
    let scroll = $(".dataTables_scroll");

    $(".dataTables_scrollBody").remove();

    scroll.append(
      "<div class='d-flex'><div class='col-auto' id='colDT'><div class='row' id='colDTable'>" +
      "</div></div>" +
      "<div class='col-auto m-0 p-0' id='scrollBar'>" +
      "</div></div>"
    );

    $("#colDT").prop("style").setProperty("width", (scroll.width() - 40).toString() + "px", "important");
    scroll.find("#colDTable").append(scrollBody);

    $("#scrollBar").append("<button id='listUp' class='btn btn-success' style='margin:0;padding: 0;width: 40px;height: 40px;top: 0;left: 0;position: absolute;'></button><button id='scrollBtn' class='btn btn-danger' style='margin:0;padding: 0;width: 40px;height: 40px;top: 40px;left: 0;position: absolute;'></button><button id='listDown' class='btn btn-success' style='margin:0;padding: 0;width: 40px;height: 40px;bottom: 1px;left: 0;position: absolute;'></button>");

    $("#listUp").on('click', function () {
      scrollBody.prop("scrollTop", scrollBody.prop("scrollTop") - 100);
    });

    $("#listDown").on('click', function () {
      scrollBody.prop("scrollTop", scrollBody.prop("scrollTop") + 100);
    });

    let flag = false;
    let y = 70;
    $("#scrollBtn").on('mousemove', function (e) {
      // console.log($("#listDown").prop("offsetTop"));
      if (flag) {
        $("#scrollBtn").css("top", e.clientY - y);
        if ($("#scrollBtn").prop("offsetTop") < 40) {
          $("#scrollBtn").css("top",40);
        }
        if ($("#scrollBtn").prop("offsetTop") > $("#listDown").prop("offsetTop") - 40){
          $("#scrollBtn").css("top",$("#listDown").prop("offsetTop") - 40);
        }

        //считаю %
        //100%
        let pes100 = $("#listDown").prop("offsetTop") - 40 - 40;
        //нулевое расположение кнопки
        let topB = $("#scrollBtn").prop("offsetTop") - 40;
        // прцент сдвига
        let pes = (topB*100)/pes100;

        console.log(scrollBody);

        //двигаю сам список на %
        //100%
        let listAllPes = scrollBody.prop("scrollHeight") - scrollBody.prop("offsetHeight");
        let t =(listAllPes * pes) / 100;
        console.log(t);
        scrollBody.prop("scrollTop", (listAllPes * pes) / 100);

      }
    });
    $("#scrollBtn").on('mousedown', function (e) {
      flag = true;
      //y = e.clientY - 40;
      //console.log(e.clientY);
    });
    $("#scrollBtn").on('mouseup', function () {
      flag = false;
    });
    // $("#scrollBtn").on('mouseleave', function () {
    //   if (flag) {
    //     flag = false;
    //   }
    // });
  }

  // Открывает модальное окно. command - case-идентификатор
  openModalDialog(command: string) {
    this.Command = command;
    this.modalWindow.modal("show");
  }

  //Возникает при изминении input в AddProduct
  changeInputModal(val: string) {
    this.inputModal = val;
  }

  //Возникает при нажаии "ОК" input в AddProduct
  selectInputModal(event: boolean) {
    console.log("selected enter");
  }

  test() {
    console.log("test");
  }



}

