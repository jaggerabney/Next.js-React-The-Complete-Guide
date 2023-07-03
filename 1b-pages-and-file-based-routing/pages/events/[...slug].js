import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList/EventList";
import ResultsTitle from "../../components/events/ResultsTitle/ResultsTitle";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const [yearAsString, monthAsString] = filterData;
  const year = +yearAsString,
    month = +monthAsString;

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return <p className="center">Invalid filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({ year, month });
  const date = new Date(year, month - 1);

  if (!filteredEvents || filteredEvents.length < 1) {
    return <p>No events found for the given filter!</p>;
  }

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
