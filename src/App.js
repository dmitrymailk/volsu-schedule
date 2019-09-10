import React, { Component } from "react";
import Day from "./components/Day";
import Pointer from "./components/Pointer";

let database = [
  {
    dayName: "Понедельник",
    lessons: [
      {
        time: "08:30",
        name: "Алгебра и теория чисел (пр) Доц. Кондрашов А.Н., 3-04 А"
      },
      {
        time: "10:10",
        name: "Геометрия и топология (пр) доц. Полубоярова Н.М., 3-05 А"
      },
      {
        time: "12:00",
        name:
          "Информатика и программирование (лаб) ст.пр. Штельмах Т.В., 1-02 В ст.пр. Чебаненко Н.А., 4-02 А"
      },
      {
        time: "13:40",
        name:
          "Информатика и программирование (лаб) ст.пр. Штельмах Т.В., 1-02 В ст.пр. Чебаненко Н.А., 4-02 А"
      },
      {
        time: "15:20",
        name: "Физическая культура и спорт(л), проф. Коваленко Т.Г., 4-29 Г"
      }
    ]
  },
  {
    dayName: "Вторник",
    lessons: [
      {
        time: "08:30",
        name: "-"
      },
      {
        time: "10:10",
        name: "Геометрия и топология (л) доц. Полубоярова Н.М., 3-01 А"
      },
      {
        time: "12:00",
        name: "Математический анализ (пр) ст.пр. Королев А.Г., 1-01 Б"
      },
      {
        time: "13:40",
        name:
          "Прикладная физическая культура (пр), ст. пр. Швардыгулин А.В., ст.пр. Заулошнов В.А., ст.пр. Никитин С.О., пр. Иноземцева А.Н"
      },
      {
        time: "15:20",
        name: "-"
      }
    ]
  },
  {
    dayName: "Среда",
    lessons: [
      {
        time: "08:30",
        name: "Русский язык и культура речи (пр), проф. Терентьева Е.В., 3-04А"
      },
      {
        time: "10:10",
        name: "Алгебра и теория чисел (пр) доц. Кондрашов А.Н., 1-01 Б"
      },
      {
        time: "12:00",
        name: "-"
      },
      {
        time: "13:40",
        name: "-"
      },
      {
        time: "15:20",
        name: "-"
      }
    ]
  },
  {
    dayName: "Четверг",
    lessons: [
      {
        time: "08:30",
        name: "-"
      },
      {
        time: "10:10",
        name: "-"
      },
      {
        time: "12:00",
        name:
          "Иностранный язык (лаб) доц. Щеколдина А.В., 3-05 А ст.пр. Торгашов В.И., 4-03 А"
      },
      {
        time: "13:40",
        name:
          "Иностранный язык (лаб) доц. Щеколдина А.В. 4-02 А ст.пр. Буланов Д.С. 4-03 А"
      },
      {
        time: "15:20",
        name: "Математический анализ (пр) ст.пр. Королев А.Г., 1-01 Б"
      }
    ]
  },
  {
    dayName: "Пятница",
    lessons: [
      {
        time: "08:30",
        name: "-"
      },
      {
        time: "10:10",
        name: "-"
      },
      {
        time: "12:00",
        name: "-"
      },
      {
        time: "13:40",
        name: "-"
      },
      {
        time: "15:20",
        name: "-"
      }
    ]
  },
  {
    dayName: "Суббота",
    lessons: [
      {
        time: "08:30",
        name: "Алгебра и теория чисел (л) доц. Попов В.В., 4-08 А"
      },
      {
        time: "10:10",
        name: "Информатика и программирование (л) ст.пр. Штельмах Т.В., 4-08 А"
      },
      {
        time: "12:00",
        name: "Математический анализ (л) доц. Светлов А.В., 4-08 А"
      },
      {
        time: "13:40",
        name: "-"
      },
      {
        time: "15:20",
        name: "-"
      }
    ]
  }
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      today: {
        exist: false,
        num: 0
      }
    };
  }

  componentDidMount() {
    this.startPointer();
  }

  setToday = async () => {
    await this.setState({
      today: {
        num: this.getToday(),
        exist: true
      }
    });

    await this.startPointer();
  };

  setWeek = async () => {
    await this.setState({
      today: {
        num: 0,
        exist: false
      }
    });
    await this.startPointer();
  };

  getToday = () => {
    let getWeekDay = date => {
      let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
      return days[date.getDay()];
    };

    let date = new Date();
    let today = getWeekDay(date);

    switch (today) {
      case "ПН":
        return 0;
      case "ВТ":
        return 1;
      case "СР":
        return 2;
      case "ЧТ":
        return 3;
      case "ПТ":
        return 4;
      case "СБ":
        return 5;
      case "ВС":
        return 0;
      default:
        return 0;
    }
  };

  startPointer = () => {
    let pointer = document.querySelector(".pointer");
    let initialHeight = 10;
    let now = new Date();
    let { exist } = this.state.today;
    console.log("this get today", this.getToday());
    if (!exist && this.getToday() > 0) {
      pointer.style.top = `${508 * this.getToday() + 10}px`;
      initialHeight = 508 * this.getToday();
      console.log("object", initialHeight, this.getToday());
    } 
    else if (exist) {
      pointer.style.top = `${10}px`;
      initialHeight = 10;
      console.log('today')
    }
    let Hn = now.getHours();
    let Mn = now.getMinutes();

    function calcMin(M, H) {
      return M + H * 60;
    }
    if (calcMin(Mn, Hn) > 8 * 60 + 30 && calcMin(Mn, Hn) < 10 * 60 + 10) {
      pointer.style.top = `${initialHeight +
        currentMinutes(now, 30, 8) * 1.1}px`;
      console.log("change time 1");
    } else if (calcMin(Mn, Hn) > 10 * 60 + 10 && calcMin(Mn, Hn) < 12 * 60) {
      pointer.style.top = `${initialHeight +
        100.4 +
        currentMinutes(now, 10, 10) * 1.1}px`;
        console.log("change time 2");
    } else if (calcMin(Mn, Hn) > 12 * 60 && calcMin(Mn, Hn) < 13 * 60 + 40) {
      pointer.style.top = `${initialHeight +
        100.4 * 2 +
        currentMinutes(now, 0, 12) * 1.1}px`;
        console.log("change time 3");
    } else if (
      calcMin(Mn, Hn) > 13 * 60 + 40 &&
      calcMin(Mn, Hn) < 15 * 60 + 20
    ) {
      pointer.style.top = `${initialHeight +
        100.4 * 3 +
        currentMinutes(now, 40, 13) * 1.1}px`;
        console.log("change time 4");
    } else if (calcMin(Mn, Hn) > 15 * 60 + 20 && calcMin(Mn, Hn) < 17 * 60) {
      pointer.style.top = `${initialHeight +
        100.4 * 4 +
        currentMinutes(now, 20, 15) * 1.1}px`;
        console.log("change time 5");
    } else if (calcMin(Mn, Hn) > 17 * 60) {
      pointer.style.top = `${508 * (this.getToday() + 1)}px`;
      console.log("time oveer");
    }

    function currentMinutes(now, min, hour) {
      let curH = now.getHours();
      let curM = now.getMinutes();
      let curTime = curH * 60 + curM;
      let time = hour * 60 + min;
      return curTime - time;
    }
  };

  render() {
    let { today } = this.state;
    return (
      <React.Fragment>
        <button className="control-button" onClick={this.setToday}>
          Сегодня
        </button>
        <button className="control-button" onClick={this.setWeek}>
          Неделя
        </button>
        <div className="week-wrapper">
          <Pointer />

          {today.exist ? (
            <Day day={database[today.num]} />
          ) : (
            database.map((item, i) => {
              return <Day day={item} key={i} />;
            })
          )}
        </div>
      </React.Fragment>
    );
  }
}
