import type { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import { POST_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import { Post } from '@/components/Post';

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  return {
    title: post?.title,
  };
}

export default async function PostDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className='container mx-auto grid grid-cols-1 gap-6 p-12'>
      <Post {...post} />
    </main>
  );
}
