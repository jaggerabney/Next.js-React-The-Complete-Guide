import { useState, useRef, useEffect } from "react";

import Notification from "../../UI/Notification/notification";

import classes from "./ContactForm.module.css";
import Portal from "../../UI/Portal/Portal";

async function sendContactData(contactData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function ContactForm() {
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function submitHandler(event) {
    event.preventDefault();

    const message = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      message: messageRef.current.value,
    };

    setRequestStatus("pending");

    try {
      await sendContactData(message);

      setRequestStatus("success");
    } catch (err) {
      setRequestError(err);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  } else if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  } else if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How may I help you?</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input ref={nameRef} type="text" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea ref={messageRef} id="message" rows="5" />
        </div>
        <div className={classes.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <Portal>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
      </Portal>
    </section>
  );
}
