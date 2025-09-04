import Image from 'next/image';
import { DESCRIPTION, TECHNOLOGIES } from '@/constants';

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';

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
      <div className='mt-5 max-w-3xl rounded-2xl bg-gray-50 p-5'>
        <span className='font-medium'>Introduction</span>
        <p className='mt-5 text-left font-medium text-pretty whitespace-pre-line'>
          {DESCRIPTION}
        </p>
      </div>

      <Marquee className='mt-20'>
        <MarqueeFade side='left' />
        <MarqueeFade side='right' />
        <MarqueeContent>
          {TECHNOLOGIES.map((tech, index) => (
            <MarqueeItem
              className="h-32 w-32 flex items-center justify-center"
              key={index}
            >
              <Image
                src={tech.icon}
                alt={tech.label}
                width={80}
                height={80}
                className="object-contain"
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
}
