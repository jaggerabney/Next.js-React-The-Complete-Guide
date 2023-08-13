import AllPosts from "../../components/posts/AllPosts/AllPosts";
import { getAllPosts } from "../../helpers/posts-util";

export default function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts }, revalidate: 300 };
}
