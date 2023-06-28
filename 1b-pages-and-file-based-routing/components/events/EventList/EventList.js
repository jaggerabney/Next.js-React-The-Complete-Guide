import EventItem from "../EventItem/EventItem";

function EventList(props) {
  return (
    <ul>
      {props.events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
