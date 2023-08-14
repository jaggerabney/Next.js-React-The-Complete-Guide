import Image from "next/image";

import ReactMarkdown from "react-markdown";

import classes from "./PostDetail.module.css";

function PostContent({ post }) {
  const reactMarkdownRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
        />
      );
    },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const { properties, alt } = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${properties.src}`}
              alt={alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article>
      <ReactMarkdown components={reactMarkdownRenderers}>
        {post.content}
      </ReactMarkdown>
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
      <PostContent post={post} />
    </div>
  );
}
