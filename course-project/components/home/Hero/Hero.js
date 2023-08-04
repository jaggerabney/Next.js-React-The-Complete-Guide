import Image from "next/image";

import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/portrait.jpg"
          alt="An image of me!"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jagger</h1>
      <p>I blog about web development - especially the MERN stack.</p>
    </section>
  );
}
