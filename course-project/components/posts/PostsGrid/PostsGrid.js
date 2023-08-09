import PostItem from "../PostItem/PostItem";

import classes from "./PostGrid.module.css";

export default function PostsGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </ul>
  );
}
