import { useContext, useEffect } from "react";

import NotificationContext from "../../store/notification-context";

import classes from "./notification.module.css";

function Notification() {
  const { notification, hideNotification } = useContext(NotificationContext);
  let statusClasses = "";

  if (notification.status === "success") {
    statusClasses = classes.success;
  }

  if (notification.status === "error") {
    statusClasses = classes.error;
  }

  if (notification.status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={hideNotification}>
      <h2>{notification.title}</h2>
      <p>{notification.message}</p>
    </div>
  );
}

export default Notification;
