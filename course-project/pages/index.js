import Hero from "../components/home/Hero/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";

export default function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getFeaturedPosts();

  return { props: { posts }, revalidate: 300 };
}
