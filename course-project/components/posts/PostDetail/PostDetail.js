import Image from "next/image";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import classes from "./PostDetail.module.css";

function PostContent({ post }) {
  const reactMarkdownRenderers = {
    img({ src, alt }) {
      return <Image src={`/images/posts/${post.slug}/${src}`} alt={alt} />;
    },
    p({ node, children }) {
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

      return <p>{children}</p>;
    },
    code({ className, children }) {
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
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
