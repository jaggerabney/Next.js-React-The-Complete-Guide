import { createContext } from "react";

const NotificationContext = createContext({
  notification: null, // { title, message, status }
  showNotification: (notifictionData) => {},
  hideNotification: () => {},
});

export function NotificationContextProvider({ children }) {
  const [notification, setNotification] = useState(null);

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
