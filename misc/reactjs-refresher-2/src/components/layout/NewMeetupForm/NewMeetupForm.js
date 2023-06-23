import Card from "../../UI/Card/Card";

import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image URL</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea required id="description" rows="5" />
        </div>
        <div className={classes.actions}>
          <button type="submit">Add meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
