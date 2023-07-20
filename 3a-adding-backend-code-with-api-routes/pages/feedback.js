import { getAllFeedback } from "./api/feedback";

function FeedbackPage({ feedbackItems }) {
  return (
    <>
      <h1>All Feedback</h1>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            <p>Email: {item.email}</p>
            <p>Feedback: {item.feedback}</p>
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
