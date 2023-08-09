import PostsGrid from "../../posts/PostsGrid/PostsGrid";

import classes from "./FeaturedPosts.module.css";

export default function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
