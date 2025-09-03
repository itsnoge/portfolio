import Image from 'next/image';
import { DESCRIPTION } from '@/constants';

export default function HomePage() {
  return (
    <section className='container mx-auto'>
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
      <p className='mt-4 max-w-3xl rounded-2xl bg-gray-50 p-5 text-left text-lg font-medium text-pretty whitespace-pre-line'>
        {DESCRIPTION}
      </p>
    </section>
  );
}
