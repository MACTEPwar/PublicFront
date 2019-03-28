import { Component, OnInit } from '@angular/core';
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

          }
        },
        {
          title: "Копия чека КЛЕФ",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Копия чека терминала",
          src: "../../assets/test.png",
          action: () => {
            
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
            
          }
        },
        {
          title: "Служебный вынос",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Служебный внос",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Денежный ящик",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Денег в кассе",
          src: "../../assets/test.png",
          action: () => {
            
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
            
          }
        },
        {
          title: "Возврат весь",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Возврат сервер",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Возврат сервер весь",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Спец возврат",
          src: "../../assets/test.png",
          action: () => {
            
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
            
          }
        },
        {
          title: "Х-отчет на терминале",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Товарный отчет",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Z-отчет",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Z-отчет на терминале",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Копия Z-отчета на терминале",
          src: "../../assets/test.png",
          action: () => {
            
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
            
          }
        },
        {
          title: "Отмена по терминалу",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Диагностика",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Статус модема",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Информация РРО",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Установить время РОS",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Установить время ФР",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Время с POS в ФР",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Аварийное закрытие",
          src: "../../assets/test.png",
          action: () => {
            
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
            
          }
        },
        {
          title: "Выход в ОС",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Перезапуск программы",
          src: "../../assets/test.png",
          action: () => {
            
          }
        },
        {
          title: "Перезапуск кассы",
          src: "../../assets/test.png",
          action: () => {
            
          }
        }
      ]
    },
  ];

  currentItemGroup: number = 1;
  maxItemGroup: number = this.elements.length;
  minItemGroup: number = 1;

  currentItem: number = 1;
  minItem:number = 1;
  maxItem: number;

  isGroup: boolean = true;


  ngOnInit() {
    this.onKeyDown();
  }

  onKeyDown() {
    console.log(this.currentItemGroup);
    document.onkeydown = (e) => {
      if (e.key === 'F1') {
        e.preventDefault();
        return false;
      }
      //console.log();
      this.maxItem = this.elements[this.currentItemGroup - 1].items.length;
      switch (e.keyCode) {

        case 13: {
          this.goToItem();
          break;
        }
        case 27: {
          if (!this.isGroup) this.goBack();
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
}
