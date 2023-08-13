import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileData = fs.readFileSync(filePath, "utf-8");
  const slug = fileName.replace(/\.md$/, "");

  const { data, content } = matter(fileData);

  return { slug, data, content };
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
