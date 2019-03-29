import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  elements = [
    {
      title: "Копия чека",
      src: "../../assets/test.png",
      items: [
        {
          title: "Копия чека",
          src: "../../assets/test.png",
          action: () => {
            //console.log("show");
            this.titleModal = "Сделать копию чека?";
            this.isShowedDialog = true;
            this.iconModal = "../../assets/info.png"
            
          },  
          callback: ():any => {
            console.log(this.resultDialog);
          }  
        },
        {
          title: "Копия чека КЛЕФ",
          src: "../../assets/test.png",
          action: () => {
            this.titleModal = "Подтвердите действие";
            this.discriptonModal = "Вы точно хотите сделать копию чека КЛЕФ?";
            this.isShowedDialog = true;
          },
          callback: () => {
            console.log(this.resultDialog);
          }  
        },
        {
          title: "Копия чека терминала",
          src: "../../assets/test.png",
          action: () => {
            this.titleModal = "Подтвердите действие";
            this.discriptonModal = "Вы точно хотите сделать копию чека КЛЕФ?";
            this.inputsModal = [
              {label: "asd1"}
            ]
            this.isShowedDialog = true;
          },
          callback: ():any => {
            console.log(this.resultDialog);
          } 
        }
      ]
    },
    {
      title: "Деньги",
      src: "../../assets/test.png",
      items: [
        {
          title: "Нулевой чек",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Служебный вынос",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Служебный внос",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Денежный ящик",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Денег в кассе",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        }
      ]
    },
    {
      title: "Возвраты",
      src: "../../assets/test.png",
      items: [
        {
          title: "Возврат по позиции",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Возврат весь",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Возврат сервер",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Возврат сервер весь",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Спец возврат",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        }
      ]
    },
    {
      title: "Отчеты",
      src: "../../assets/test.png",
      items: [
        {
          title: "Х-отчет",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Х-отчет на терминале",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Товарный отчет",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Z-отчет",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Z-отчет на терминале",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Копия Z-отчета на терминале",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        }
      ]
    },
    {
      title: "Сервис",
      src: "../../assets/test.png",
      items: [
        {
          title: "Калькулятор",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Отмена по терминалу",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Диагностика",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Статус модема",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Информация РРО",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Установить время РОS",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Установить время ФР",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Время с POS в ФР",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Аварийное закрытие",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        }
      ]
    },
    {
      title: "Сервис",
      src: "../../assets/test.png",
      items: [
        {
          title: "Выключение",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Выход в ОС",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Перезапуск программы",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        },
        {
          title: "Перезапуск кассы",
          src: "../../assets/test.png",
          action: () => {
            
          },
          callback: () => {
            console.log(this.resultDialog);
          }
        }
      ]
    },
  ];

  // для хождения по группам
  currentItemGroup: number = 1;
  maxItemGroup: number = this.elements.length;
  minItemGroup: number = 1;
  // для хождения по детям группы
  currentItem: number = 1;
  minItem:number = 1;
  maxItem: number;
  // в данный момент по группам ходим?
  isGroup: boolean = true;
  // настройки для модального диалогового окна
  titleModal;
  discriptonModal
  buttonArrayModal = [{title:'Ок',class:'btn-success'},{title:'Отмена',class:'btn-danger'}];
  widthModal = '40%';
  iconModal;
  inputsModal = [];


  ngOnInit() {
    this.onKeyDown();
  }

  onKeyDown() {
    document.onkeydown = (e) => {
      if (e.key === 'F1') {
        e.preventDefault();
        return false;
      }
      this.maxItem = this.elements[this.currentItemGroup - 1].items.length;
      switch (e.keyCode) {
        case 13: {
          
          if (this.isGroup)this.goToItem();
          else {
            this.elements[this.currentItemGroup - 1].items[this.currentItem - 1].action();
          }
          break;
        }
        case 27: {
          if (!this.isGroup) {
            this.currentItem = 1;
            this.goBack();
          }
          else{
            this.router.navigate(['sale']);
          }
          break;
        }
        //вверх
        case 38: {
          this.prev();
          break;
        }
        //вниз
        case 40: {
          this.next();
          break;
        }
      }
    }
  }

  next() {
    if (this.currentItemGroup < this.maxItemGroup && this.isGroup) this.currentItemGroup++;
    if (this.currentItem < this.maxItem && !this.isGroup) this.currentItem++;
  }

  prev() {
    if (this.currentItemGroup > this.minItemGroup && this.isGroup) this.currentItemGroup--;
    if (this.currentItem > this.minItem && !this.isGroup) this.currentItem--;
  }

  goToItem() {
    this.isGroup = false;
  }

  goBack() {
    this.isGroup = true;
  }
  
  isShowedDialog:boolean = false;
  resultDialog:string;

  onDialogClick(result:string){
    this.resultDialog = result;
    this.isShowedDialog = false;
    this.onKeyDown();
    this.elements[this.currentItemGroup - 1].items[this.currentItem - 1].callback();
    this.refreshDialog();
  }

  refreshDialog(){
    this.titleModal = null;
    this.discriptonModal= null;
    this.buttonArrayModal = [{title:'Ок',class:'btn-success'},{title:'Отмена',class:'btn-danger'}];
    this.widthModal = '40%';
    this.iconModal = undefined;
    this.inputsModal = [];
  }
}
