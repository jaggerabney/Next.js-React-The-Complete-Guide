import { useContext, useRef } from "react";

import NotificationContext from "../../store/notification-context";

import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const notifContext = useContext(NotificationContext);
  const emailRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;

    notifContext.showNotification({
      title: "Signing up",
      message: "Registering for newsletter...",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) =>
        notifContext.showNotification({
          title: "Success!",
          message: data.message,
          status: "success",
        })
      )
      .catch((error) =>
        notifContext.showNotification({
          title: "Error",
          message: error.message || "Something went wrong!",
          status: "error",
        })
      );
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
