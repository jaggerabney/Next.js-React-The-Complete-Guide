import { useEffect, useState } from "react";
import MeetupList from "../../components/meetups/MeetupList/MeetupList";

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
