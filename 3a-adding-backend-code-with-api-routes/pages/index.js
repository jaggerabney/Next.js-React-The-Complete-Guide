import { useRef } from "react";

function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;
  }

  return (
    <div>
      <h1>The Home Page</h1>
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
