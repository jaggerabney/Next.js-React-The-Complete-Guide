import { useContext, useEffect, useState } from "react";

import NotificationContext from "../../store/notification-context";
import CommentList from "./comment-list";
import NewComment from "./new-comment";

import classes from "./comments.module.css";

function Comments({ eventId }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const notifContext = useContext(NotificationContext);

  useEffect(() => {
    if (showComments && comments.length === 0) {
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
          setIsLoading(false);
        });
    }
  }, [showComments, comments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notifContext.showNotification({
      title: "Adding comment...",
      message: "Adding comment to post...",
      status: "pending",
    });

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        notifContext.showNotification({
          title: "Success!",
          message: data.message,
          status: "success",
        });
      })
      .catch((error) => {
        notifContext.showNotification({
          title: "Error!",
          message: error.message || "Something went wrong!",
          status: "error",
        });
      });
  }

  console.log(showComments, isLoading);

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && isLoading && <p>Loading...</p>}
      {showComments && !isLoading && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
