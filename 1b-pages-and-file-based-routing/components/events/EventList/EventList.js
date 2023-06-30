import EventItem from "../EventItem/EventItem";

import classes from "./EventList.module.css";

function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
