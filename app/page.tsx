import Link from "next/link";

const mockPost = {
  title: 'Mock title',
  excerpt: 'Mock excerpt',
  date: 'Jan 1, 2026',
};

export default function Home() {
  return (
    <>
      {
        [...Array(6)].map((_, i) => (
          <Link href={`${mockPost.title.toLowerCase().split(' ').join('-')}-${i}`} key={`${mockPost.title} ${i}`}>
            <h2>{`${mockPost.title} ${i}`}</h2>
            <p>{`${mockPost.excerpt} ${i}`}</p>
            <p>{mockPost.date}</p>
          </Link>
        ))
      }
    </>
  );
};
