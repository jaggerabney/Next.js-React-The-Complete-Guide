export async function getAllEvents() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/events.json`
  );
  const data = await response.json();
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  const featuredEvents = allEvents.filter((event) => event.isFeatured);

  return featuredEvents;
}

export async function getEventById(eventId) {
  const allEvents = await getAllEvents();
  const targetEvent = allEvents.find((event) => event.id === eventId);

  return targetEvent;
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
