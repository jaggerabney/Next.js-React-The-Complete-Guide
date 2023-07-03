import EventList from "../../components/events/EventList/EventList";
import EventsSearch from "../../components/events/EventsSearch/EventsSearch";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList events={events} />
    </>
  );
}

export default EventsPage;
