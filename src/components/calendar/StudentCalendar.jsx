import { React } from "react";
import { Calendar, Radio } from "antd";
import moment from "moment";
import ModalWindow from "../modalWindow/ModalWindow";
import style from "./StudentCalendar.module.scss";

moment.updateLocale("en", {
  weekdaysMin: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]
});

const lectorName = "Talan Workman";

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          title: "Lesson 1",
          content: "Functional vs class components",
          lector: `Lector ${lectorName}`
        }
      ];
      break;
    case 10:
      listData = [
        {
          title: "Test",
          content: "English Grammar"
        }
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <>
      {listData.map((item) => (
        <ModalWindow
          title={item.title}
          content={item.content}
          lector={item.lector}
        />
      ))}
    </>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
  return false;
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div>
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

const headerRender = ({ value, type, onChange, onTypeChange }) => {
  const current = value.clone();
  const localeData = value.localeData();
  const months = [];
  for (let i = 0; i < 12; i += 1) {
    current.month(i);
    months.push(localeData.monthsShort(current));
  }
  const month = value.month();
  const year = value.year();
  const day = value.date();
  return (
    <div className={style.abc}>
      <div className={style.calendarHeader}>
        <div className={style.datePicker}>
          <span
            onClick={() => {
              const newValue = value.clone();
              newValue.month(parseInt(newValue.month() - 1, 10));
              onChange(newValue);
            }}
            aria-hidden="true"
          >
            <span className={style.leftBtn} />
          </span>
          <span
            onClick={() => {
              const newValue = value.clone();
              newValue.month(parseInt(newValue.month() + 1, 10));
              onChange(newValue);
            }}
            aria-hidden="true"
          >
            <span className={style.rightBtn} />
          </span>
          <sapn
            className={style.date}
          >{`${day} ${months[month]}, ${year}`}</sapn>
          <span
            className={style.todayBtn}
            onClick={() => {
              const newValue = value.clone();
              const date = new Date();
              newValue.month(parseInt(date.getMonth(), 10));
              onChange(newValue);
              newValue.date(parseInt(date.getDate(), 10));
              onChange(newValue);
              newValue.year(parseInt(date.getFullYear(), 10));
              onChange(newValue);
            }}
            aria-hidden="true"
          >
            Today
          </span>
        </div>
        <div>
          <Radio.Group
            size="small"
            onChange={(e) => onTypeChange(e.target.value)}
            value={type}
          >
            <Radio.Button
              onChange={(e) => onTypeChange(e.target.value)}
              value="month"
            >
              Month
            </Radio.Button>
            <Radio.Button value="year">Year</Radio.Button>
          </Radio.Group>
          <ModalWindow />
        </div>
      </div>
    </div>
  );
};

const StudentCalendar = () => (
  <div>
    <Calendar
      headerRender={headerRender}
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
    />
  </div>
);

export default StudentCalendar;
