import { useState, useEffect, useRef } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailRef = useRef();
  const feedbackRef = useRef();

  useEffect(() => {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  }, []);

  function submitHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, feedback }),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message));
  }

  console.log(feedbackItems);

  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            <p>Email: {item.email}</p>
            <p>Feedback: {item.feedback}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email address</label>
          <br />
          <input type="email" id="email" ref={emailRef} />
        </div>
        <br />
        <div>
          <label htmlFor="feedback">Feedback</label>
          <br />
          <textarea id="feedback" rows="5" ref={feedbackRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
