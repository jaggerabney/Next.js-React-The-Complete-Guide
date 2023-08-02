import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null, // { title, message, status }
  showNotification: (notifictionData) => {},
  hideNotification: () => {},
});

export function NotificationContextProvider({ children }) {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (
      notification &&
      (notification.status === "success" || notification.status === "error")
    ) {
      const timer = setTimeout(() => setNotification(null), 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  function showNotification(notifictionData) {
    setNotification(notifictionData);
  }

  function hideNotification() {
    setNotification(null);
  }

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, hideNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
