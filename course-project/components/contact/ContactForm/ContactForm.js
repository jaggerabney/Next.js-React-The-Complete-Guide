import { useRef } from "react";

import classes from "./ContactForm.module.css";

export default function ContactForm() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const message = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      message: messageRef.current.value
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    });
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
    </section>
  );
}
