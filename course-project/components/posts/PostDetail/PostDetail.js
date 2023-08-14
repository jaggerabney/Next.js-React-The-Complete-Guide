import Image from "next/image";

import ReactMarkdown from "react-markdown";

import classes from "./PostDetail.module.css";

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

export default function PostDetail({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <div className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <PostContent content={post.content} />
    </div>
  );
}
