import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();

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

  return (
    <div>
      <h1>The Home Page</h1>
      <Link href={"/feedback"}>View all feedback</Link>
      <br />
      <br />
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
