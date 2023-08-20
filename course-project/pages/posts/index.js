import Head from "next/head";
import AllPosts from "../../components/posts/AllPosts/AllPosts";
import { getAllPosts } from "../../helpers/posts-util";

export default function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>Jagger's Blog - Posts</title>
        <meta
          name="description"
          content="A list of all of my programming-related blog posts"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts }, revalidate: 300 };
}
