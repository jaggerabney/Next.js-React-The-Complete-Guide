import Link from "next/link";
import Image from "next/image";

import classes from "./PostItem.module.css";

export default function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;
  const imagePath = `/images/posts/${slug}/${image}`;
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={classes.post}>
      <Link>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
