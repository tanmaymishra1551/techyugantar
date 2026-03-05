import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDir = path.join(process.cwd(), "content/blogs");

export type BlogMeta = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  date: string;
  tags: string[];
  image: string;
  views: number;
  comments: number;
};

export type Blog = BlogMeta & {
  content: string;
};

// Get all blog slugs (used for generateStaticParams)
export function getAllSlugs(): string[] {
  return fs.readdirSync(blogsDir).map((file) => file.replace(/\.md$/, ""));
}

// Get all blogs metadata (used for blog listing page)
export function getAllBlogs(): BlogMeta[] {
  const files = fs.readdirSync(blogsDir);
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(blogsDir, file), "utf8");
    const { data } = matter(raw);
    return { slug, ...data } as BlogMeta;
  });
}

// Get a single blog by slug (used for detail page)
export function getBlogBySlug(slug: string): Blog {
  const filePath = path.join(blogsDir, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { slug, content, ...data } as Blog;
}