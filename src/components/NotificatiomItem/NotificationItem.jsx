import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import style from "../../pages/Notification/Notification.module.scss";

const NotificationItem = ({
  notificationTextTitle,
  notificationText,
  buttonText
}) => (
  <div>
    <section className={style.notificationResult}>
      <div className={style.result}>
        <p className={style.notificationResultTitle}>
          {notificationTextTitle}
          <span className={style.notificationResultTitleName}>
            &nbsp;Congragulate!
          </span>
        </p>
        <p>{notificationText}</p>
        <Button type="button" className={style.btn}>
          {buttonText}
        </Button>
      </div>
    </section>
  </div>
);

export default NotificationItem;
