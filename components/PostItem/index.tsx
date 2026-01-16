import Link from "next/link";
import { formatDate } from "@/helpers/time";
import "./styles.css";

export type PostMeta = {
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
};

type Props = {
  post: PostMeta;
};

export default function PostItem({ post }: Props) {
  return (
    <Link href={post.slug} className="home-post block py-4" key={post.slug}>
      <h2 className="font-title home-post__title mb-2">{post.title}</h2>
      <p className="font-body home-post__date">{formatDate(post.date)}</p>
      <p className="font-body home-post__excerpt mt-1">{post.excerpt}</p>
    </Link>
  );
};
