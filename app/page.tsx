import PostItem from "@/app/components/PostItem";

const mockPost = {
  title: 'Introducing RSC Explorer',
  excerpt: 'My new hobby project.',
  date: 'December 19, 2025',
};

export default function Home() {
  return (
    <>
      {
        [...Array(5)].map((_, i) => (
          <PostItem
            title={mockPost.title}
            date={mockPost.date}
            excerpt={mockPost.excerpt}
            key={`${mockPost.title}-item-${i}`}
          />
        ))
      }
    </>
  );
};
