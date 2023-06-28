import EventList from "../components/events/EventList/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home page!</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
