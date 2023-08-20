import Head from "next/head";

import Hero from "../components/home/Hero/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Jagger's Blog - Home</title>
        <meta
          name="description"
          content="I post about programming and web development!"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getFeaturedPosts();

  return { props: { posts }, revalidate: 300 };
}
