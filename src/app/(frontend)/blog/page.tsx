import { POSTS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';
import { Title } from '@/components/Title';
import { PostCard } from '@/components/PostCard';

export default async function PostsPage() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className='container mx-auto grid grid-cols-1 gap-6 py-10'>
      <Title>Blog</Title>
      <div className='flex flex-col gap-24 py-12'>
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
}
