import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), 'data');

export const getAllPosts = () => {
  const files = fs.readdirSync(postsDir);

  return files.map(file => {
    const slug = file.replace('.md', '');
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const { data, content } = matter(raw);

    return {
      slug,
      ...data,
      content,
      date: data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : data.date,
      title: String(data.title),
    };
  });
};
