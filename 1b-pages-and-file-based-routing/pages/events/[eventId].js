import { useRouter } from "next/router";

import EventSummary from "../../components/events/EventSummary/EventSummary";
import EventLogistics from "../../components/events/EventLogistics/EventLogistics";
import EventContent from "../../components/events/EventContent/EventContent";
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
        <div className="centered">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
