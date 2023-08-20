import Head from "next/head";

import PostDetail from "../../components/posts/PostDetail/PostDetail";
import { getAllPostFileNames, getPostData } from "../../helpers/posts-util";

export default function PostDetailPage({ post }) {
  return (
    <>
      <Head>
        <title>{`Jagger's Blog - ${post.title}`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostDetail post={post} />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getPostData(slug);

  return { props: { post }, revalidate: 300 };
}

export function getStaticPaths() {
  const postFileNames = getAllPostFileNames();

  const slugs = postFileNames.map((fileName) => {
    const trimmedFileName = fileName.replace(/\.md$/, "");

    return {
      params: { slug: trimmedFileName },
    };
  });

  return {
    paths: slugs,
    fallback: false,
  };
}
