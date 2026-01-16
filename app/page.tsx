import PostItem from "@/components/PostItem";
import getAllPosts from '@/helpers/getAllPosts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      {
        posts.map((post) => (
          <PostItem
            key={post.slug}
            post={post}
          />
        ))
      }
    </>
  );
};
