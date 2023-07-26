import { useState } from "react";

import { getAllFeedback } from "./api/feedback/index";

function FeedbackPage({ feedbackItems }) {
  const [feedbackData, setFeedbackData] = useState(null);

  function loadFeedbackHandler(id) {
    if (!feedbackData) {
      fetch(`/api/feedback/${id}`)
        .then((response) => response.json())
        .then((data) => setFeedbackData(data.feedback));
    } else {
      setFeedbackData(null);
    }
  }

  return (
    <>
      <h1>All Feedback</h1>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            {feedbackData && <p>Email: {feedbackData.email}</p>}
            {feedbackData && <p>Feedback: {feedbackData.feedback}</p>}
            <button onClick={loadFeedbackHandler.bind(this, item.id)}>
              {feedbackData ? "Hide" : "Show"} details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const feedbackItems = getAllFeedback();

  return {
    props: {
      feedbackItems,
    },
  };
}

export default FeedbackPage;
