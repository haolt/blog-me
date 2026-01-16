import { notFound } from "next/navigation";
import getAllPosts from "@/helpers/getAllPosts";
import { markdownToHtml } from "@/helpers/markdown";
import { formatDate } from "@/helpers/time";
import styles from "./page.module.css";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getAllPosts().find(p => p.slug === slug);
  if (!post) notFound();
  const contentHtml = await markdownToHtml(post.content)

  return (
    <>
      <h1 className={`${styles.title} font-title`}>{post.title}</h1>
      <p className={`${styles.date} font-body mt-2`}>{formatDate(post.date)}</p>
      <article>
        <div
          className={`${styles.markdown} font-body mt-12`}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </>
  );
};
