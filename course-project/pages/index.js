import Hero from "../components/home/Hero/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts/FeaturedPosts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for production. It makes building full-stack React apps a breeze, and ships with built-in server-side rendering, backend support, and more.",
    date: "2023-08-09",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for production. It makes building full-stack React apps a breeze, and ships with built-in server-side rendering, backend support, and more.",
    date: "2023-08-09",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for production. It makes building full-stack React apps a breeze, and ships with built-in server-side rendering, backend support, and more.",
    date: "2023-08-09",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for production. It makes building full-stack React apps a breeze, and ships with built-in server-side rendering, backend support, and more.",
    date: "2023-08-09",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
