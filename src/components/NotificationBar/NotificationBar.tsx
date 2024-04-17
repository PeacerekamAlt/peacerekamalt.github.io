import "./style.scss";

import React, { useState } from "react";

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

  const formattedMessage = () => {
    const contentElements = (notification || [])?.message
      .split("\n")
      .map((a, i) => {
        const isBr = a === "<br>";
        return (
          <div
            style={{
              color: isBr ? "transparent" : "white",
              fontSize: isBr ? 8 : "",
            }}
            key={`${a}-${i}`}
          >
            {isBr ? "-" : a}
          </div>
        );
      });

    return contentElements;
  };

  if (!notification?.message) {
    return <></>;
  }

  return (
    <div
      className={classNames}
      onClick={(event) => {
        event.preventDefault();
        setHide(true);
      }}
    >
      <span className="notification-text">{formattedMessage()}</span>
      <span className="close-notification">×</span>
    </div>
  );
};
