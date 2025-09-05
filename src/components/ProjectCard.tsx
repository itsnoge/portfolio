import Image from 'next/image';
import { PROJECTS_QUERYResult } from '@/sanity/types';
import { urlFor } from '@/sanity/lib/image';
import dayjs from 'dayjs';
import Link from 'next/link';

export function ProjectCard(props: PROJECTS_QUERYResult[0]) {
  const { slug, title, mainImage, hoverImage, publishedAt, description } =
    props;

  return (
    <Link
      href={`/projects/${slug!.current}`}
      className='group hover:bg-foreground w-full cursor-pointer rounded-2xl bg-gray-100 transition-all duration-500'
    >
      <div className='overflow-hidden rounded-2xl p-1.5'>
        <div className='relative aspect-[4/3] h-full w-full overflow-hidden rounded-xl md:h-full'>
          {mainImage && (
            <Image
              src={urlFor(mainImage).url()}
              alt={mainImage.alt || title || ''}
              fill
              priority
              className='rounded object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'
            />
          )}

          {hoverImage && (
            <Image
              src={urlFor(hoverImage).url()}
              alt={hoverImage.alt || title || ''}
              fill
              priority
              className='absolute top-0 left-0 rounded object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0'
            />
          )}
        </div>

        <div className='px-4 py-4 duration-500 ease-in-out group-hover:text-white'>
          <div className='mb-2 flex items-center justify-between gap-x-2'>
            <h3 className='truncate text-lg font-semibold'>{title}</h3>
            <p className='font-jetbrains-mono text-sm duration-500'>
              {dayjs(publishedAt).year()}
            </p>
          </div>
          <p className='text-sm text-pretty'>{description}</p>
        </div>
      </div>
    </Link>
  );
}
