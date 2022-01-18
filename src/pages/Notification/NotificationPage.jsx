import React from "react";
import "antd/dist/antd.css";
import Header from "../../components/header/Header";
import NotificationItem from "../../components/NotificatiomItem/NotificationItem";
import EmptyComponent from "../../components/emptyComponent/EmptyComponent";

const NotificationPage = () => {
  const notifications = {
    english: {
      q1: "string1",
      q2: "string2"
    },
    technical: {
      q1: "string1",
      q2: "string2"
    }
  };
  return (
    <div>
      <Header headerTitle="Notifications" />
      {notifications ? (
        <NotificationItem
          notificationTextTitle="Tech Test"
          notificationText="Congragulate! You have 98% right answers. Welcome to the next step!"
          buttonText="Start"
        />
      ) : (
        <EmptyComponent componentName="notification" />
      )}
    </div>
  );
};

export default NotificationPage;
