import React, { useState } from "react";
import "./style.scss";
import db from "../../news.json";

const notification = {
  color: "red",
  message: db.important,
};

export const NotificationBar: React.FC = () => {
  const [hide, setHide] = useState(false);

  const isHidden = hide || !notification;
  const classNames = [
    notification?.color ? `notification-color-${notification?.color}` : "",
    "notification-bar",
    isHidden ? "hide" : "reveal",
  ]
    .join(" ")
    .trim();

  return (
    <div
      className={classNames}
      onClick={(event) => {
        event.preventDefault();
        setHide(true);
      }}
    >
      <span className="notification-text">{notification?.message}</span>
      <span className="close-notification">×</span>
    </div>
  );
};
