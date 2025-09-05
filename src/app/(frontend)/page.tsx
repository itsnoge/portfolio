import Image from 'next/image';
import { DESCRIPTION } from '@/constants';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { ProjectCard } from '@/components/ProjectCard';
import Link from 'next/link';

export default async function HomePage() {
  const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });
  console.log(projects);
  return (
    <div className='container mx-auto space-y-26'>
      <section>
        <div className='w-full flex-shrink-0'>
          <Image
            src='/logo-line-semibold.svg'
            alt='ITSNOGE Logo'
            width={750}
            height={80}
            className='h-auto w-full'
            priority
          />
        </div>
        <div className='mt-5 max-w-3xl rounded-2xl bg-gray-50 p-5'>
          <span className='font-semibold'>Introduction</span>
          <p className='mt-5 text-left text-sm text-pretty whitespace-pre-line'>
            {DESCRIPTION}
          </p>
        </div>
      </section>
      <section className='h-screen'>
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-semibold md:text-3xl lg:text-5xl'>
            Selected Work.
          </p>
          <Link href='/projects'>
            <Button className='rounded-full text-xs font-medium'>
              View all projects
            </Button>
          </Link>
        </div>
        <p className='mt-5 max-w-sm text-sm text-pretty whitespace-pre-line'>
          A curated selection of projects that showcase my passion for clean
          code, modern technologies, and building purposeful digital
          experiences.
        </p>

        <div className='mt-10 grid grid-cols-1 gap-2 md:grid-cols-2'>
          {projects.map((project) => (
            <ProjectCard key={project._id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
