import Head from "next/head";

import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage({ events }) {
  return (
    <>
      <Head>
        <title>NextEvents</title>
        <meta
          name="description"
          content="Find a lot of great events to help you evolve!"
        />
      </Head>
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
}

export default HomePage;
