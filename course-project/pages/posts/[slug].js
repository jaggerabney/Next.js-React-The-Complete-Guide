import PostDetail from "../../components/posts/PostDetail/PostDetail";
import { getAllPostFileNames, getPostData } from "../../helpers/posts-util";

export default function PostDetailPage({ post }) {
  return <PostDetail post={post} />;
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
