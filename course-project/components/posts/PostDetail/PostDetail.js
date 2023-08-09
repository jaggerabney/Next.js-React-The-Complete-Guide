import Image from "next/image";

import ReactMarkdown from "react-markdown";

import classes from "./PostDetail.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs1",
  title: "Getting Started with Next.js",
  image: "getting-started-nextjs.png",
  content: "# This is a first post!",
  date: "2023-08-09",
};

function PostContent({ content }) {
  return (
    <article>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

function PostHeader({ title, image }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default function PostDetail() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <div className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <PostContent content={DUMMY_POST.content} />
    </div>
  );
}
