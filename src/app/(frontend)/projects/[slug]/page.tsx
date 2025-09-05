import type { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import { PROJECT_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import { Project } from '@/components/Project';

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: project } = await sanityFetch({
    query: PROJECT_QUERY,
    params: await params,
  });

  return {
    title: project?.title,
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: project } = await sanityFetch({
    query: PROJECT_QUERY,
    params: await params,
  });

  if (!project) {
    notFound();
  }
  return (
    <>
      <Project {...project} />
    </>
  );
}
