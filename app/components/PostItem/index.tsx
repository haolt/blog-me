import Link from "next/link";
import './styles.css';

export default function PostItem({
  title,
  date,
  excerpt,
  key,
}: {
  title: string;
  date: string;
  excerpt: string;
  key: string;
}) {
  return (
    <Link href={`${title.toLowerCase().split(' ').join('-')}-${key}`} className="home-post block py-4" key={key}>
      <h2 className="font-title home-post__title mb-2">{title}</h2>
      <p className="font-body home-post__date">{date}</p>
      <p className="font-body home-post__excerpt mt-1">{excerpt}</p>
    </Link>
  );
};
