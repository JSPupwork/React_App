import React from "react";
import { Button } from "antd";
import style from "./Schedule.module.scss";
import Header from "../../components/header/Header";
import StudentCalendar from "../../components/calendar/StudentCalendar";

const SchedulePage = () => (
  <div>
    <Header headerTitle="Schedule">
      <Button type="button" className={style.addToCalendarBtn}>
        Add to Your Calendar
      </Button>
    </Header>
    <StudentCalendar />
  </div>
);

export default SchedulePage;
