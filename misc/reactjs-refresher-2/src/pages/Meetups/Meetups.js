import { useEffect, useState } from "react";
import MeetupList from "../../components/meetups/MeetupList/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function MeetupsPage() {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/meetups.json`
      );
      const meetupsData = await response.json();
      let meetupsArray = [];

      for (const key in meetupsData) {
        meetupsArray.push({
          id: key,
          ...meetupsData[key],
        });
      }

      setIsLoading(false);
      setMeetups(meetupsArray);
    }

    fetchData();
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading ? <p>Loading...</p> : <MeetupList meetups={meetups} />}
    </section>
  );
}

export default MeetupsPage;
