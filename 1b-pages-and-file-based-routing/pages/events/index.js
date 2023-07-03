import { useRouter } from "next/router";

import EventList from "../../components/events/EventList/EventList";
import EventsSearch from "../../components/events/EventsSearch/EventsSearch";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function eventSearchHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={eventSearchHandler} />
      <EventList events={events} />
    </>
  );
}

export default EventsPage;
