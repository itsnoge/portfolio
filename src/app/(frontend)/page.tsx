import Image from 'next/image';
import { DESCRIPTION } from '@/constants';
import { SectionHeader } from '@/components/SectionHeader';
import ProjectList from '@/components/ProjectList';

export default async function HomePage() {
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
        <SectionHeader
          title='Selected Work.'
          description='A curated selection of projects that showcase my passion for clean code, modern technologies, and building purposeful digital experiences.'
          buttonText='View more'
          buttonLink='/projects'
        />

        <ProjectList />
      </section>
    </div>
  );
}
