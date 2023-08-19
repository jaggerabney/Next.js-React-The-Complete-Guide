import classes from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>How may I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" />
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
}
