import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Blog posts page!</h1>
    </div>
  );
}

export default BlogPostsPage;
