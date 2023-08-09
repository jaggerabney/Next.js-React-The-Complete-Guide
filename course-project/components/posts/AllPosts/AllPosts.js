import PostsGrid from "../PostsGrid/PostsGrid";

import classes from "./AllPosts.module.css";

export default function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
