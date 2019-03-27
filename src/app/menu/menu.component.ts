import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor() { }

  elements = [
    {
      title: "Копия чека",
      src: "../../assets/test.png",
      items: [
        {
          title: "Копия чека",
          src: "../../assets/test.png"
        },
        {
          title: "Копия чека КЛЕФ",
          src: "../../assets/test.png"
        },
        {
          title: "Копия чека терминала",
          src: "../../assets/test.png"
        }
      ]
    },
    {
      title: "Деньги",
      src: "../../assets/test.png",
      items: [
        {
          title: "Нулевой чек",
          src: "../../assets/test.png"
        },
        {
          title: "Служебный вынос",
          src: "../../assets/test.png"
        },
        {
          title: "Служебный внос",
          src: "../../assets/test.png"
        },
        {
          title: "Денежный ящик",
          src: "../../assets/test.png"
        },
        {
          title: "Денег в кассе",
          src: "../../assets/test.png"
        }
      ]
    },
    {
      title: "Возвраты",
      src: "../../assets/test.png",
      items: [
        {
          title: "Возврат по позиции",
          src: "../../assets/test.png"
        },
        {
          title: "Возврат весь",
          src: "../../assets/test.png"
        },
        {
          title: "Возврат сервер",
          src: "../../assets/test.png"
        },
        {
          title: "Возврат сервер весь",
          src: "../../assets/test.png"
        },
        {
          title: "Спец возврат",
          src: "../../assets/test.png"
        }
      ]
    },
    {
      title: "Отчеты",
      src: "../../assets/test.png",
      items: [
        {
          title: "Х-отчет",
          src: ""
        },
        {
          title: "Х-отчет на терминале",
          src: "../../assets/test.png"
        },
        {
          title: "Товарный отчет",
          src: "../../assets/test.png"
        },
        {
          title: "Z-отчет",
          src: "../../assets/test.png"
        },
        {
          title: "Z-отчет на терминале",
          src: "../../assets/test.png"
        },
        {
          title: "Копия Z-отчета на терминале",
          src: "../../assets/test.png"
        }
      ]
    },
    {
      title: "Сервис",
      src: "../../assets/test.png",
      items: [
        {
          title: "Калькулятор",
          src: "../../assets/test.png"
        },
        {
          title: "Отмена по терминалу",
          src: "../../assets/test.png"
        },
        {
          title: "Диагностика",
          src: "../../assets/test.png"
        },
        {
          title: "Статус модема",
          src: "../../assets/test.png"
        },
        {
          title: "Информация РРО",
          src: "../../assets/test.png"
        },
        {
          title: "Установить время РОS",
          src: "../../assets/test.png"
        },
        {
          title: "Установить время ФР",
          src: "../../assets/test.png"
        },
        {
          title: "Время с POS в ФР",
          src: "../../assets/test.png"
        },
        {
          title: "Аварийное закрытие",
          src: "../../assets/test.png"
        }
      ]
    },
    {
      title: "Сервис",
      src: "../../assets/test.png",
      items: [
        {
          title: "Выключение",
          src: "../../assets/test.png"
        },
        {
          title: "Выход в ОС",
          src: "../../assets/test.png"
        },
        {
          title: "Перезапуск программы",
          src: "../../assets/test.png"
        },
        {
          title: "Перезапуск кассы",
          src: "../../assets/test.png"
        }
      ]
    },
  ];

  
  currentItemGroup: number = 1;
  maxItemGroup:number = this.elements.length;
  minItemGroup:number = 1;
  currentItem: number = 1;


  ngOnInit() {
    console.log(this.elements);
    this.onKeyDown();
  }

  onKeyDown() {
    console.log(this.currentItemGroup);
    document.onkeydown = (e) => {
      if (e.key === 'F1') {
        e.preventDefault();
        return false;
      }

      switch (e.keyCode) {

        case 13: {

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
    if (this.currentItemGroup < this.maxItemGroup) this.currentItemGroup++;
  }

  prev() {
    if(this.currentItemGroup > this.minItemGroup)this.currentItemGroup--;
  }
}
