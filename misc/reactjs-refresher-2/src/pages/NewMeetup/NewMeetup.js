import NewMeetupForm from "../../components/layout/NewMeetupForm/NewMeetupForm";

function NewMeetupPage() {
  function newMeetupHandler(meetup) {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/meetups.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetup),
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onSubmit={newMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
