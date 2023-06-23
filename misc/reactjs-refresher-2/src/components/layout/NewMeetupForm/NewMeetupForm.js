import { useRef } from "react";

import Card from "../../UI/Card/Card";

import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function formSubmitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image URL</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea required id="description" rows="5" ref={descriptionRef} />
        </div>
        <div className={classes.actions}>
          <button type="submit">Add meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
