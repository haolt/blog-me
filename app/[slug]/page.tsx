const mockPost = {
  title: 'Mock title',
  excerpt: 'Mock excerpt',
  date: 'Jan 1, 2026',
};

export default function PostDetail() {
  return (
    <>
      <h2>{mockPost.title}</h2>
      <p>{mockPost.excerpt}</p>
      <p>{mockPost.date}</p>
    </>
  );
};
