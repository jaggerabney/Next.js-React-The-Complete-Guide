import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getPostData(postId) {
  const slug = postId.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileData = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileData);

  return { slug, ...data, content };
}

export function getAllPostFileNames() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts() {
  const postFileNames = fs.readdirSync(postsDirectory);

  const sortedPosts = postFileNames
    .map((postFileName) => getPostData(postFileName))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
