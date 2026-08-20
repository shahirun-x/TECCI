/**
 * NEWS — Markdown-authored posts
 *
 * To add a new post:
 *   1. Create a new .md file in content/news/ (filename becomes the URL slug)
 *   2. Add frontmatter: title, date (YYYY-MM-DD), excerpt, and optionally
 *      cover (e.g. "/images/news/my-post.jpg") and author
 *   3. Write the body in Markdown below the frontmatter
 *   4. Commit and push — Vercel auto-deploys in ~30 seconds
 *
 * To remove a post: delete its .md file from content/news/.
 *
 * Cover images: place image files in public/images/news/ and reference
 * them from frontmatter like: cover: "/images/news/my-post.jpg"
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  author?: string;
  content: string;
};

const newsDirectory = path.join(process.cwd(), "content/news");

export function getAllNewsPosts(): NewsPost[] {
  if (!fs.existsSync(newsDirectory)) return [];

  const files = fs.readdirSync(newsDirectory).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const filePath = path.join(newsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || "",
      cover: data.cover,
      author: data.author,
      content,
    };
  });

  // Sort by date descending (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsPostBySlug(slug: string): NewsPost | null {
  const posts = getAllNewsPosts();
  return posts.find((p) => p.slug === slug) || null;
}
